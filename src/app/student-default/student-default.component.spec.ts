import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDefaultComponent } from './student-default.component';

describe('StudentDefaultComponent', () => {
  let component: StudentDefaultComponent;
  let fixture: ComponentFixture<StudentDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
