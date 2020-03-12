import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListerPaginationComponent } from './tweet-lister-pagination.component';

describe('TweetListerPaginationComponent', () => {
  let component: TweetListerPaginationComponent;
  let fixture: ComponentFixture<TweetListerPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetListerPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListerPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
