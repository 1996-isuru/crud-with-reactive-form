import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';


@Component({
  selector: 'app-fetchapi',
  templateUrl: './fetchapi.component.html',
  styleUrls: ['./fetchapi.component.css']
})
export class FetchapiComponent implements OnInit {

  todoList;

  constructor(private appService: ApicallService) { }

  ngOnInit(): void {

    this.todoList = this.appService.getTodos();
    alert("dd");
    alert(this.todoList);
  }
  

}
