import { Component } from '@angular/core';
import { SearchType, SearchRequest, Tweet } from 'src/app/features/tweetLister/models/tweetList.models';
import { TweetService } from 'src/app/features/tweetLister/services/tweet.service';
import { GetTweetByUser, GetTweetByHashtag } from '../../models/tweetApi.models';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tweet-lister-home',
  templateUrl: './tweet-lister-home.component.html',
  styleUrls: ['./tweet-lister-home.component.less']
})

export class TweetListerHomeComponent {
  SearchType = SearchType;

  searchType = SearchType.USER;
  loading = false;

  offset = 0;
  searchValue = 'home';

  tweets: Tweet[] = [];

  constructor(private tweetService: TweetService) {
    this.loadTweet(this.offset, this.searchValue);
  }

  loadTweet(offset: number, value: string): void {
    this.loading = true;
    let obs$: Observable<GetTweetByHashtag | GetTweetByUser>;
    switch (this.searchType) {
      case SearchType.USER:
        obs$ = this.tweetService.getTweetsByUsers(value, offset);
        break;
      case SearchType.HASHTAG:
        obs$ = this.tweetService.getTweetsByHashtag(value, offset);
        break;
      default:
        this.loading = false;
        return;
    }
    obs$.subscribe(response => {
      this.tweets = response.results;
      this.loading = false;
    });
  }

  setSearchType(type: SearchType): void {
    this.searchType = type;
    this.searchValue = 'home';
    this.loadTweet(this.offset, this.searchValue);
  }

  changePage(page: PageEvent) {
    this.offset = page.pageIndex * 10;
    this.loadTweet(this.offset, this.searchValue);
  }

  search(request: SearchRequest) {
    this.searchValue = request.value;
    this.loadTweet(this.offset, this.searchValue);
  }
}
