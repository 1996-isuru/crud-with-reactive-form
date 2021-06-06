import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit, AfterViewChecked,OnDestroy {

  @Input() public greeting = "Child Greeting";

  constructor() {
    console.log("constructor is called.");
   }

  ngOnInit(): void {
    console.log("ngOnInit is called.");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges is called.");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck is called.");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called.");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called.");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called.");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked is called.");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy is called.");
  }

}
