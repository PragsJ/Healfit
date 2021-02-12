import { TestBed } from '@angular/core/testing';

import { PredictapiService } from './predictapi.service';

describe('PredictapiService', () => {
  let service: PredictapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
