import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  //thibuna vidiha

  transform(value: any): any {
    let currntYear : any = new Date().getFullYear();
    let birthyear : any = new Date(value).getFullYear();
    let userAge = currntYear - birthyear;
    return userAge;
  }

}
