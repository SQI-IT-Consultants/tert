import { TestBed, inject } from '@angular/core/testing';

import { DeptAllocatedService } from './dept-allocated.service';

describe('DeptAllocatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeptAllocatedService]
    });
  });

  it('should be created', inject([DeptAllocatedService], (service: DeptAllocatedService) => {
    expect(service).toBeTruthy();
  }));
});
