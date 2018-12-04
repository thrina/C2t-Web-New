import { TestBed, inject } from '@angular/core/testing';

import { CustomNotifyService } from './custom-notify.service';

describe('CustomNotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomNotifyService]
    });
  });

  it('should be created', inject([CustomNotifyService], (service: CustomNotifyService) => {
    expect(service).toBeTruthy();
  }));
});
