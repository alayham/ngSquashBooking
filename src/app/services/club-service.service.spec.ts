import { TestBed, inject } from '@angular/core/testing';

import { ClubService } from './club-service.service';

describe('ClubServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubService]
    });
  });

  it('should be created', inject([ClubService], (service: ClubService) => {
    expect(service).toBeTruthy();
  }));
});
