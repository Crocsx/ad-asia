import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tweet } from '../../models/tweetList.models';
import DateUtils from 'src/app/utils/date.utils';


interface TableTweet {
  tweet: string;
  likes: number;
  replies: number;
  retweet: number;
  hashtag: string;
  date: string;
}

@Component({
  selector: 'app-tweet-lister',
  templateUrl: './tweet-lister.component.html',
  styleUrls: ['./tweet-lister.component.less']
})
export class TweetListerComponent implements OnChanges {
  @Input() tweets: Tweet[];
  displayedColumns: string[] = ['tweet', 'likes', 'replies', 'retweet', 'hashtag', 'date'];
  dataSource: TableTweet[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('tweets')) {
      this.createTableTweets(changes.tweets.currentValue);
    }
  }

  createTableTweets(tweets: Tweet[]) {
    this.dataSource = [];
    tweets.forEach(tweet => {
      this.dataSource.push({
        tweet: tweet.text,
        likes: tweet.likes,
        replies: tweet.replies,
        retweet: tweet.retweets,
        hashtag: tweet.hashtags.join(', '),
        date: DateUtils.formatForDisplay(new Date(tweet.date))
      });
    });
  }
}
