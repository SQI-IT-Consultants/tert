import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDefaultComponent } from './staff-default.component';

describe('StaffDefaultComponent', () => {
  let component: StaffDefaultComponent;
  let fixture: ComponentFixture<StaffDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
