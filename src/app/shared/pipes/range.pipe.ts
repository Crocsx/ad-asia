import {Pipe, PipeTransform} from '@angular/core';

/**
 * @params {number} length The length that we want to use (ex: 4 will create [1,2,3,4])
 * @params {number} offset the offset to apply on the length (ex: 2 with length 2 will create [2,3])
 *
 * @description Used to create an array of index based on the length provided (used in *ngFor)
 */
@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {
  transform(length: number, offset: number = 0): number[] {
    if (!length) {
      return [];
    }
    const array = [];
    for (let n = 0; n < length; ++n) {
      array.push(offset + n);
    }
    return array;
  }
}
