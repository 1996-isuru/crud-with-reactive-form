import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import EventEmitter from 'events';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  @Output() public eventEmitter1 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  AddNewItem(item){
    this.eventEmitter1.emit(item);
  }

}
