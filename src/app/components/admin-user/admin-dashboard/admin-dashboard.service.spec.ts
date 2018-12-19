import { TestBed, inject } from '@angular/core/testing';

import { AdminDashboardService } from './admin-dashboard.service';

describe('AdminDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDashboardService]
    });
  });

  it('should be created', inject([AdminDashboardService], (service: AdminDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
