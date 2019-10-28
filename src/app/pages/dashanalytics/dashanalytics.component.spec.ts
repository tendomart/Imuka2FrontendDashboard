import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashanalyticsComponent } from './dashanalytics.component';

describe('DashanalyticsComponent', () => {
  let component: DashanalyticsComponent;
  let fixture: ComponentFixture<DashanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
