import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStudentProfileComponent } from './mobile-student-profile.component';

describe('MobileStudentProfileComponent', () => {
  let component: MobileStudentProfileComponent;
  let fixture: ComponentFixture<MobileStudentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileStudentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileStudentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
