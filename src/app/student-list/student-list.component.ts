import { Component, OnInit } from '@angular/core';

import studentData from '../student.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students:Student[] = studentData;

}
