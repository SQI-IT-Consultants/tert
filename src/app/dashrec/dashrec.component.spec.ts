import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashrecComponent } from './dashrec.component';

describe('DashrecComponent', () => {
  let component: DashrecComponent;
  let fixture: ComponentFixture<DashrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
