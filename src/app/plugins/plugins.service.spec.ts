import { TestBed } from '@angular/core/testing';

import { PluginsHttpService } from './plugins-http.service';

describe('PluginsService', () => {
  let service: PluginsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
