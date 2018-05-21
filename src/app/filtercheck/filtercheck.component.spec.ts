import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercheckComponent } from './filtercheck.component';

describe('FiltercheckComponent', () => {
  let component: FiltercheckComponent;
  let fixture: ComponentFixture<FiltercheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
