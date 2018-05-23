import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSetUpComponent } from './exam-set-up.component';

describe('ExamSetUpComponent', () => {
  let component: ExamSetUpComponent;
  let fixture: ComponentFixture<ExamSetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSetUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
