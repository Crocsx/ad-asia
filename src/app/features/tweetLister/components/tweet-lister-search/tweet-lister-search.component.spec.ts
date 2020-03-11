import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListerSearchComponent } from './tweet-lister-search.component';

describe('TweetListerSearchComponent', () => {
  let component: TweetListerSearchComponent;
  let fixture: ComponentFixture<TweetListerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
