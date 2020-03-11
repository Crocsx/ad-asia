import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListerComponent } from './tweet-lister.component';

describe('TweetListerComponent', () => {
  let component: TweetListerComponent;
  let fixture: ComponentFixture<TweetListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
