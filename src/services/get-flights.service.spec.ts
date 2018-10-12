import { TestBed, inject } from '@angular/core/testing';

import { GetFlightsService } from './get-flights.service';

describe('GetFlightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFlightsService]
    });
  });

  it('should be created', inject([GetFlightsService], (service: GetFlightsService) => {
    expect(service).toBeTruthy();
  }));
});
