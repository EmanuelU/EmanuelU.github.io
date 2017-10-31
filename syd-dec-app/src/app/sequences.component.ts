import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bid } from './bid';
import { Module } from './module';
import { SequenceService } from './sequence.service';


@Component({
  selector: 'sequences',
  templateUrl: './sequences.component.html',
  styleUrls: ['./sequences.component.css']
})

export class SequencesComponent implements OnInit{
	sequences: Bid[];
	modules: Module[];
	result: Bid[];
 
  	constructor(
    	private sequenceService: SequenceService,
    	private router: Router) { }

  	search(value){
  		var modules = this.modules;
  		var root = this.sequences;
  		value = value.toLowerCase();
  		if(value.indexOf('-') == -1)
  		{
  			value = value.replace(/.{2}/g, "$&" + "-");
  		}

  		if(value.slice(-1) == "-")
  		{
  			value = value.slice(0, -1);
  		}
		if(!isNaN(parseInt(value.slice(-1))))
  		{
  			value = value.slice(0, -2);
  		}
		var result = this.searchTree(root, value);
		this.result = result;
  	}

  	searchTree(root, matchingTitle)
	{
		for (let sequence of root) 
		{
			if(sequence.id == matchingTitle)
			{
				return sequence;
			} 
			else if (sequence.options != null)
			{
				var found = this.searchTree(sequence.options, matchingTitle);
				if(found != null)
				{
					return found;
				}
			}
		}

		return null;
	}
 
	getSequences(): void {
		this.sequenceService
	    	.getSequences()
	    	.then(sequences => this.sequences = sequences);
	}

	getModules(): void {
		this.sequenceService
	    	.getModules()
	    	.then(modules => this.modules = modules);
	}

	ngOnInit(): void {
		this.getSequences();
		this.getModules();
	}
}


