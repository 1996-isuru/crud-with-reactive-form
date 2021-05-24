import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender == "male"){
      value ="Mr." + value;
    }
    else if(gender == "female"){
      value = "Mrs." +value;
    }
    else{
      value =" " +value;
    }
    return value;
  }

}
