import { TestBed } from '@angular/core/testing';

import { HereApiService } from './here-api.service';

describe('HereApiService', () => {
  let service: HereApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HereApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
