import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { SearchType, SearchRequest } from 'src/app/features/tweetLister/models/tweetList.models';

@Component({
  selector: 'app-tweet-lister-search',
  templateUrl: './tweet-lister-search.component.html',
  styleUrls: ['./tweet-lister-search.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TweetListerSearchComponent {
  @Input() searchType: SearchType;
  @Output() executeSearch = new EventEmitter<SearchRequest>();

  value = '';

  search(): void {
    this.executeSearch.emit({
      type: this.searchType,
      value: this.value
    });
  }
}
