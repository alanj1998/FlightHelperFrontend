import { TestBed, inject } from '@angular/core/testing';

import { GetDataFromLoginService } from './get-data-from-login.service';

describe('GetDataFromLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataFromLoginService]
    });
  });

  it('should be created', inject([GetDataFromLoginService], (service: GetDataFromLoginService) => {
    expect(service).toBeTruthy();
  }));
});
