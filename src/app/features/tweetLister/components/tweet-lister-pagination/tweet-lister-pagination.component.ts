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
  @Input() size = 5;
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
    return this.shouldShowPaginationSize() ? this.page : this.size;
  }

  /**
   * @description dispatch an event to go to selected page
   */
  goTo(page: number): void {
    this.goToPage.emit(page);
  }

  /**
   * @description Calculate the current page offset
   * This function is a bit complicated, but it's because the assignment never return the total amount of tweet.
   * in this case, I believe a pagination should not be used, but instead, we should use infinite scroll.
   * The problem is, we want to always show to the user page that are loaded, and never allow user to do a big loading gap.
   * If for exemple our pagination is size 5 (1 / 2 / 3/ 4 / 5) but user only loaded the 3 first tweet we would not want him to load
   * the 50 tweet, cause there might be only 40
   *
   * @returns the current page offset
   */
  pageOffset(): number {
    // If the last page is under the pagination size,
    // we must always show page 1
    if (this.shouldShowPaginationSize()) {
      return 1;
    } else {
      // If the last page is over the pagination size,
      // and we are the lasat page, we must not show additional page (cause there might be no tweet)
      if (this.page === this.lastPage()) {
        return this.page - (this.size - 1);  // always show current page as last page
      } else {
        let obs;
        // If we are in the middle of loaded page, the gap to last page should not be higher than the loaded page
        // so we must not show additional page (cause there might be no tweet)
        if (this.lastPage() < this.page + Math.ceil(this.size * 0.5)) {
          obs = (this.lastPage() - this.size) + 1;
        } else {
          // If we are in the middle of loaded pages, We want to show the current available gap beetween loaded pages to max loaded page
          obs = this.page - Math.floor(this.size * 0.5);
        }
        return (Math.abs(obs || 1));
      }
    }
  }

  /**
   * @description get last currently loaded page
   *
   * @returns last currently loaded page
   */
  lastPage(): number {
    return Math.ceil(this.itemCount / this.perPage);
  }

  /**
   * @description return true if the pagination sohuld use the pagination size,
   * or if the pagination size should be avoided to to the current pagination state
   *
   * @returns is the last page lower than the pagination size
   */
  shouldShowPaginationSize(): boolean {
    return ((this.page < this.size && (this.page === this.lastPage() || this.lastPage() === 0)));
  }
}
