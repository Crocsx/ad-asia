import { NgModule } from '@angular/core';
import { TweetListerHomeComponent } from './pages/tweet-lister-home/tweet-lister-home.component';
import { TweetListerComponent } from './components/tweet-lister/tweet-lister.component';
import { TweetListerSearchComponent } from './components/tweet-lister-search/tweet-lister-search.component';
import { TweetService } from './services/tweet.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TweetListerPaginationComponent } from './components/tweet-lister-pagination/tweet-lister-pagination.component';

@NgModule({
  declarations: [
    TweetListerComponent,
    TweetListerHomeComponent,
    TweetListerSearchComponent,
    TweetListerPaginationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TweetListerComponent,
    TweetListerHomeComponent
  ],
  providers: [
    TweetService
  ]
})
export class TweetListerModule { }
