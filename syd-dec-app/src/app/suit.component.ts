import { Component, Input } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'suit',
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.css']
})

export class SuitComponent{
	@Input() suit: string;

}


