import { TestBed } from '@angular/core/testing';

import { SharedModuleTsService } from './shared-module.ts.service';

describe('SharedModuleTsService', () => {
  let service: SharedModuleTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedModuleTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
