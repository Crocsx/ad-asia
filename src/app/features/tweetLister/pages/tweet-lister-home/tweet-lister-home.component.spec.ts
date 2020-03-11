import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListerHomeComponent } from './tweet-lister-home.component';

describe('TweetListerHomeComponent', () => {
  let component: TweetListerHomeComponent;
  let fixture: ComponentFixture<TweetListerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
