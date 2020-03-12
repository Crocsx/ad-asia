import { Component, ViewEncapsulation, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { SearchType, SearchRequest } from 'src/app/features/tweetLister/models/tweetList.models';

@Component({
  selector: 'app-tweet-lister-search',
  templateUrl: './tweet-lister-search.component.html',
  styleUrls: ['./tweet-lister-search.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TweetListerSearchComponent implements OnChanges {
  /**
   * @description type of search
   */
  @Input() searchType: SearchType;
  /**
   * @description emitter dispatched on search request by user
   */
  @Output() executeSearch = new EventEmitter<SearchRequest>();

  /**
   * @description search input value
   */
  value = '';

  /**
   * @description clear the input value when the searchType is changed
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('searchType')) {
      this.clear();
    }
  }

  /**
   * @description cleasr the input value
   */
  clear() {
    this.value = '';
  }

  /**
   * @description request a search with the selected conditions
   */
  search(): void {
    this.executeSearch.emit({
      type: this.searchType,
      value: this.value
    });
  }
}
