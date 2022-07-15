import { TestBed } from '@angular/core/testing';

import { OfferPlaceService } from './offer-place.service';

describe('OfferPlaceService', () => {
  let service: OfferPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
