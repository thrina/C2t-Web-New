import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadnewsComponent } from './readnews.component';

describe('ReadnewsComponent', () => {
  let component: ReadnewsComponent;
  let fixture: ComponentFixture<ReadnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
