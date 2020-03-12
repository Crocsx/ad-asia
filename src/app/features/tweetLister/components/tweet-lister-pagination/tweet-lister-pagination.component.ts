import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-lister-pagination',
  templateUrl: './tweet-lister-pagination.component.html',
  styleUrls: ['./tweet-lister-pagination.component.less']
})
export class TweetListerPaginationComponent {
  /**
   * @description size of the paginator (count of button)
   */
  @Input() size = 3;
  /**
   * @description total element per page
   */
  @Input() perPage: number;
  /**
   * @description current page number
   */
  @Input() page: number;
  /**
   * @description total number of item
   */
  @Input() itemCount: number;
  /**
   * @description is the next button available
   */
  @Input() nextPageAvailable: boolean;

  /**
   * @description emitter to go to selected page
   */
  @Output() goToPage = new EventEmitter<number>();

  /**
   * @description calculate the current page count
   * 
   * @returns current page count
   */
  pageCount(): number {
    const pageNumber = this.page;
    return pageNumber < this.size ? pageNumber : this.size;
  }

  /**
   * @description dispatch an event to go to selected page
   */
  goTo(page: number): void {
    this.goToPage.emit(page);
  }

  /**
   * @description Calculate the current page offset
   * 
   * @returns the current page offset
   */
  pageOffset(): number {
    return this.page < this.size ? Math.floor(this.size * 0.5) : this.page - Math.ceil(this.size * 0.5);
  }
}
