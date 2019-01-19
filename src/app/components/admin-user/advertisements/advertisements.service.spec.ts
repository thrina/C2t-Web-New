import { TestBed, inject } from '@angular/core/testing';

import { AdvertisementsService } from './advertisements.service';

describe('AdvertisementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertisementsService]
    });
  });

  it('should be created', inject([AdvertisementsService], (service: AdvertisementsService) => {
    expect(service).toBeTruthy();
  }));
});
