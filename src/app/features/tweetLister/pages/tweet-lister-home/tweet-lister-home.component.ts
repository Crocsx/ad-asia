import { Component } from '@angular/core';
import { SearchType, SearchRequest, Tweet } from 'src/app/features/tweetLister/models/tweetList.models';
import { TweetService } from 'src/app/features/tweetLister/services/tweet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tweet-lister-home',
  templateUrl: './tweet-lister-home.component.html',
  styleUrls: ['./tweet-lister-home.component.less']
})

export class TweetListerHomeComponent {
  SearchType = SearchType;
  /**
   * @description search condition to use
   */
  searchType = SearchType.USER;

  /**
   * @description show loading if the component is loading
   */
  loading = false;

  /**
   * @description list of tweet currently displaying
   */
  tweets: Tweet[] = [];

  /**
   * @description offset of the tweet that are loaded
   */
  offset = 0;
  /**
   * @description tweet to display per page
   */
  pageLimit = 10;
  /**
   * @description default search value for tweet loading
   */
  searchValue = 'news';

  constructor(private tweetService: TweetService) {
    this.loadTweets(this.offset, this.searchValue);
  }

  /**
   * @params the offset to use for the tweet loading
   * @params the value to for the search
   *
   * @returns load the tweets and display them
   */
  loadTweets(offset: number, value: string): void {
    this.loading = true;
    let obs$: Observable<Tweet[]>;
    switch (this.searchType) {
      case SearchType.USER:
        obs$ = this.tweetService.getTweetsByUser(value, this.pageLimit, offset);
        break;
      case SearchType.HASHTAG:
        obs$ = this.tweetService.getTweetsByHashtag(value, this.pageLimit, offset);
        break;
      default:
        this.loading = false;
        return;
    }
    obs$.subscribe(
      response => {
        this.tweets = response;
        this.loading = false;
      }
    );
  }

  /**
   * @params the search type to use
   * 
   * @returns apply the search type and clear the tweet list
   */
  setSearchType(type: SearchType): void {
    this.searchType = type;
    this.searchValue = 'news';
    this.clear();
    this.loadTweets(this.offset, this.searchValue);
  }

  /**
   * @params request to load the selected page
   *
   * @description apply the selected search condition, and refresh the tweet list
   */
  search(request: SearchRequest): void {
    this.searchValue = request.value;
    this.clear();
    this.loadTweets(this.offset, this.searchValue);
  }

  /**
   * @params request to load the selected page
   *
   * @returns execute a request to load the selected page with the current conditions
   */
  goToPage(page: number = 0): void {
    this.offset = (page - 1) * this.pageLimit;
    this.loadTweets(this.offset, this.searchValue);
  }

  /**
   * @returns the current tweet loaded total count
   */
  getTweetCount(): number {
    return this.tweetService.tweets.length;
  }

  /**
   * @description calculated the current page number
   *
   * @returns the current page number
   */
  getPage(): number {
    return (this.offset / this.pageLimit) + 1;
  }

  /**
   * @description return an observable containing a list of tweet based on the provided conditions
   *
   * @returns boolean return true if there is no more tweet to load
   */
  isTheEnd(): boolean {
    return this.tweetService.endReached;
  }

  /**
   * @description clear the current settings
   */
  clear(): void {
    this.tweetService.purge();
    this.tweets = [];
    this.offset = 0;
  }
}
