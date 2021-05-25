import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: any, txtSearch: string) {
    if(!value || !txtSearch)
    return value;
    
    const users: any =[];
    for(const user of value){
      if(user['name'] == txtSearch){
        users.push(user);
      }
    }
    return users;
  }
}
