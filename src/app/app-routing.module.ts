import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetListerHomeComponent } from './features/tweetLister/pages/tweet-lister-home/tweet-lister-home.component';


const appRoutes: Routes = [
  { path: '', component: TweetListerHomeComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
