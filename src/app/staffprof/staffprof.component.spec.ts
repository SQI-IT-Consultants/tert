import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffprofComponent } from './staffprof.component';

describe('StaffprofComponent', () => {
  let component: StaffprofComponent;
  let fixture: ComponentFixture<StaffprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
