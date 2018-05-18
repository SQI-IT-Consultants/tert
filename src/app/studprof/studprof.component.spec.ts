import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudprofComponent } from './studprof.component';

describe('StudprofComponent', () => {
  let component: StudprofComponent;
  let fixture: ComponentFixture<StudprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
