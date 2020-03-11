import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GetTweetByUser, GetTweetByHashtag } from '../models/tweetApi.models';

@Injectable()
export class TweetService {
  constructor(private http: HttpClient) { }

  getTweetsByUsers(value: string, offset = 0): Observable<GetTweetByUser> {
    return this.http.get<GetTweetByUser>(`${environment.apiEndpoint}users/${value}?offset=${offset}`);
  }

  getTweetsByHashtag(value: string, offset = 0): Observable<GetTweetByHashtag> {
    return this.http.get<GetTweetByHashtag>(`${environment.apiEndpoint}hashtags/${value}?offset=${offset}`);
  }
}
