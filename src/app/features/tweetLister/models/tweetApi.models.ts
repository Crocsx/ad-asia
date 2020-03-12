import { Tweet } from './tweetList.models';

export interface GetTweetByUser {
    count: number;
    offset: number;
    results: Tweet[];
}

export interface GetTweetByHashtag {
    count: number;
    offset: number;
    results: Tweet[];
}

export interface GetTweetError {
    error: string;
}

