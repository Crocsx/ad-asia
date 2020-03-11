import { NgModule } from '@angular/core';
import { TweetListerHomeComponent } from './pages/tweet-lister-home/tweet-lister-home.component';
import { TweetListerComponent } from './components/tweet-lister/tweet-lister.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TweetListerSearchComponent } from './components/tweet-search/tweet-lister-search/tweet-lister-search.component';
@NgModule({
  declarations: [
    TweetListerComponent,
    TweetListerHomeComponent,
    TweetListerSearchComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TweetListerComponent,
    TweetListerHomeComponent
  ],
  providers: []
})
export class TweetListerModule { }
