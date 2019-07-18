import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'getWord', pure: false})
export class GetWord implements PipeTransform {

  transform(value: string, word = 0): string {
    if (!value) { return ''; }
    return value.split(' ')[word];
  }
}
