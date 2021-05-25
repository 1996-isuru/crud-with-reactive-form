import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  public serachTxt: any;
  public users = [{
    name: "isuru",
    gender: "male",
    bod: "01/01/2022",
  },
  {
    name: "srimal",
    gender: "male",
    bod: "01/01/202",
  },
  {
    name: "kamala",
    gender: "female",
    bod: "01/01/2022",
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
