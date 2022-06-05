import { TestBed } from '@angular/core/testing';

import { ImageRegistryHttpService } from './image-registry-http.service';

describe('ImageRegistryHttpService', () => {
  let service: ImageRegistryHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageRegistryHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
