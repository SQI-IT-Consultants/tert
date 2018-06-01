import { TestBed, inject } from '@angular/core/testing';

import { RecholdService } from './rechold.service';

describe('RecholdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecholdService]
    });
  });

  it('should be created', inject([RecholdService], (service: RecholdService) => {
    expect(service).toBeTruthy();
  }));
});
