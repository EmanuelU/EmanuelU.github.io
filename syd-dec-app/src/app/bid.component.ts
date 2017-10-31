import { Component, Input } from '@angular/core';

import { Bid } from './bid';

@Component({
  selector: 'bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})

export class BidComponent{
	@Input() bid: Bid;
	@Input() expandAll: boolean;

	getClass()
	{
		var s = (this.bid.id.replace('-', '').length/2);
		
		switch (this.mod(s, 2)) {
			case 0:
				return "list-group-item list-group-item-info";
			case 1:
				return "list-group-item list-group-item-primary";
		}
	}

	mod(num, mod) {
    	var remain = num % mod;
    	return Math.floor(remain >= 0 ? remain : remain + mod);
	}	

	getParentBidSequence()
	{
		var bids = this.bid.id.split('-');
		var bidSequence = [];

		bids.splice(-1, 1);

		for (let parentBid of bids) {
		    bidSequence.push(this.parseBid(parentBid));
		}

		return bidSequence;
	}

	parseBid(bidString)
	{
		var level = bidString.slice(0, 1);
		var suit = bidString.slice(1, 2);
		
		return {level: level, suit: suit} 
	}
}


