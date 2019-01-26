import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadeventComponent } from './readevent.component';

describe('ReadeventComponent', () => {
  let component: ReadeventComponent;
  let fixture: ComponentFixture<ReadeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});