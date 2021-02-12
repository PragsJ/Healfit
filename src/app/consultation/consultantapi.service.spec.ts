import { TestBed } from '@angular/core/testing';

import { ConsultantapiService } from './consultantapi.service';

describe('ConsultantapiService', () => {
  let service: ConsultantapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultantapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
