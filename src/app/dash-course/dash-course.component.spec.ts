import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCourseComponent } from './dash-course.component';

describe('DashCourseComponent', () => {
  let component: DashCourseComponent;
  let fixture: ComponentFixture<DashCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
