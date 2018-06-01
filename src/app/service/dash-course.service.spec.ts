import { TestBed, inject } from '@angular/core/testing';

import { DashCourseService } from './dash-course.service';

describe('DashCourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashCourseService]
    });
  });

  it('should be created', inject([DashCourseService], (service: DashCourseService) => {
    expect(service).toBeTruthy();
  }));
});
