import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GetTweetByUser, GetTweetError } from '../models/tweetApi.models';
import { map } from 'rxjs/operators';
import { Tweet, SearchType } from '../models/tweetList.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TweetService {
  /**
   * @description array of tweets
   */
  tweets: Tweet[] = [];

  /**
   * @description are all the tweet available loaded
   */
  endReached = false;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  /**
   * @params value The value we would like to search
   * @params condition the type for the search
   * @params the limit of result we would like to retrieve
   * @params the offset to apply on the search fields
   *
   * @description return an observable containing a list of tweet based on the provided conditions
   *
   * @returns list of tweet
   */
  getTweetsByUser(value: string, limit = 0, offset = 0): Observable<Tweet[]> {
    return this.getTweets(value, SearchType.USER, limit, offset);
  }

  /**
   * @params value The value we would like to search
   * @params condition the type for the search
   * @params the limit of result we would like to retrieve
   * @params the offset to apply on the search fields
   *
   * @description return an observable containing a list of tweet based on the provided conditions
   *
   * @returns list of tweet
   */
  getTweetsByHashtag(value: string, limit = 0, offset = 0): Observable<Tweet[]> {
    return this.getTweets(value, SearchType.HASHTAG, limit, offset);
  }

  /**
   * @params value The value we would like to search
   * @params condition the type for the search
   * @params the limit of result we would like to retrieve
   * @params the offset to apply on the search fields
   *
   * @description return an observable containing a list of tweet based on the provided conditions
   *
   * @returns list of tweet
   */
  getTweets(value: string, condition: SearchType, limit = 0, offset = 0): Observable<Tweet[]> {
    if (this.tweets.length >= offset + limit) {
      return new Observable(obs => {
        obs.next(this.tweets.slice(offset, offset + limit));
        obs.complete();
      });
    } else {
      return this.http.get<GetTweetByUser | GetTweetError>(`${environment.apiEndpoint}${condition}/${value}?limit=${limit + 1}&offset=${offset}`).pipe(
        map(res => {
          if (( res as GetTweetError).error) {
            this.snackBar.open(( res as GetTweetError).error, 'ok', {duration: 2000});
            this.tweets = [];
            return [];
          }
          const tweetResponse = ( res as GetTweetByUser);
          this.tweets = this.tweets.concat(tweetResponse.results);
          if (limit > tweetResponse.count) {
            this.endReached = true;
          }
          return tweetResponse.results;
        })
      );
    }
  }

  /**
   * @description clear the current loaded tweets
   */
  purge() {
    this.tweets = [];
    this.endReached = false;
  }
}
