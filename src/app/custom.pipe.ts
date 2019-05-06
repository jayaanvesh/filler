import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var arg=parseInt(args);
    return value.substring(0,arg)+"...";
  }

}
