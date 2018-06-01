import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFullRecComponent } from './courses-full-rec.component';

describe('CoursesFullRecComponent', () => {
  let component: CoursesFullRecComponent;
  let fixture: ComponentFixture<CoursesFullRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesFullRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFullRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
