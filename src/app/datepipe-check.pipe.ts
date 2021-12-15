import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipeCheck',
})
export class DatepipeCheckPipe implements PipeTransform {
  transform(value: string, ...args: any): any {
    return 'Date is:';
  }
}
