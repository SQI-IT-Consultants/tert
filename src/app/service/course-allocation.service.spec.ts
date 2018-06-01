import { TestBed, inject } from '@angular/core/testing';

import { CourseAllocationService } from './course-allocation.service';

describe('CourseAllocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseAllocationService]
    });
  });

  it('should be created', inject([CourseAllocationService], (service: CourseAllocationService) => {
    expect(service).toBeTruthy();
  }));
});
