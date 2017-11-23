import { TestBed, inject } from '@angular/core/testing';

import { ActivityDataService } from './activity-data.service';

describe('ActivityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityDataService]
    });
  });

  it('should be created', inject([ActivityDataService], (service: ActivityDataService) => {
    expect(service).toBeTruthy();
  }));
});
