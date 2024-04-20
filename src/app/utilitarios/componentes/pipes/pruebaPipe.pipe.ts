import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pruebaPipe'
})
export class PruebaPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
