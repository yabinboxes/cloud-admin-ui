import { TestBed } from '@angular/core/testing';

import { DevUnitHttpService } from './dev-unit-http.service';

describe('DevUnitHttpService', () => {
  let service: DevUnitHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevUnitHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
