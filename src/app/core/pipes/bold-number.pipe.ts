import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'boldNumber',
  standalone: true
})
export class BoldNumberPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const valueArr = value.split('-');
    const newVal = `<b>` + valueArr[0] + `</b>` + '-' + valueArr[1];
    return newVal
  }
}
