import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  value:number=0;
  @Input() 
  parentDate:string='';

  constructor() { }

  ngOnInit(): void {
  }

  counter(){
     this.value++;
  }

}
