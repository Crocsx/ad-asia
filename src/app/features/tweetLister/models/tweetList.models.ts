export enum SearchType {
    USER = 'users',
    HASHTAG = 'hashtags'
}

export interface SearchRequest {
    type: SearchType;
    value: string;
}

export interface Account {
    fullname: string;
    href: string;
    id: number;
}

export interface Tweet {
    account: Account;
    date: string;
    hashtags: string[];
    likes: number;
    replies: number;
    retweets: number;
    text: string;
}
