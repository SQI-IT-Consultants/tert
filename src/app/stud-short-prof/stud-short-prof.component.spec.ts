import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudShortProfComponent } from './stud-short-prof.component';

describe('StudShortProfComponent', () => {
  let component: StudShortProfComponent;
  let fixture: ComponentFixture<StudShortProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudShortProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudShortProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
