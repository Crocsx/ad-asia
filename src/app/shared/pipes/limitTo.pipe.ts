import { Pipe, PipeTransform } from '@angular/core';

/**
 * @params {string} value The string value to apply the limit
 * @params {number} limit The character limit to apply
 *
 * @description Used to limit the size of a text by character
 */
@Pipe({
  name: 'limitTo'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    const l = limit ? limit : 10;
    const trail = '...';

    return value.length > l ? value.substring(0, l) + trail : value;
  }
}
