import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-custom-pipe-practice',
  templateUrl: './custom-pipe-practice.component.html',
  styleUrls: ['./custom-pipe-practice.component.css']
})
export class CustomPipePracticeComponent implements OnInit {

  temp22 : any;
  dispaly_var : any = "false";

  @Output() public eventEmitter2 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  viewAge(bvalue){
    this.temp22 = bvalue;
    this.eventEmitter2.emit(bvalue);
    this.dispaly_var = "true";
  }

}
