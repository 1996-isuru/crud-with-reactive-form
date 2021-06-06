import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  msgChild;
  ChildExistance = true;

  title = 'crud-with-reactive-form';
  message = 'hello';
  Items = '';

  AddItem(item) {
    this.Items = item;
  }

  Item2 = '';
  AddItem2(bvalue) {
    this.Item2 = bvalue;
  }

  btnClick(textinput) {
    this.msgChild = textinput;
  }

  btnDestroyComp(){
    this.ChildExistance= !this.ChildExistance;
  }
}
