import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempetate',
  templateUrl: './tempetate.component.html',
  styleUrls: ['./tempetate.component.css']
})
export class TempetateComponent implements OnInit {

  c: any;
  f: any;

  changed(value: any, type: any){
if(value){
    if(type == 'c'){
      let feh = (value /2);
      this.f = feh;
    } else{
      let cel = (value * 2);
      this.c = cel;
    }
  }else {
    this.c = null;
    this.f = null;
  }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
