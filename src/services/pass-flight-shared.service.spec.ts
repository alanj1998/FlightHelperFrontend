import { TestBed, inject } from '@angular/core/testing';

import { PassFlightSharedService } from './pass-flight-shared.service';

describe('PassFlightSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassFlightSharedService]
    });
  });

  it('should be created', inject([PassFlightSharedService], (service: PassFlightSharedService) => {
    expect(service).toBeTruthy();
  }));
});
