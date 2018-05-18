import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStaffProfileComponent } from './mobile-staff-profile.component';

describe('MobileStaffProfileComponent', () => {
  let component: MobileStaffProfileComponent;
  let fixture: ComponentFixture<MobileStaffProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileStaffProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileStaffProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
