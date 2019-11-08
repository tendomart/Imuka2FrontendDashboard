import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesInvestorComponent } from './pages-investor.component';

describe('PagesInvestorComponent', () => {
  let component: PagesInvestorComponent;
  let fixture: ComponentFixture<PagesInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
