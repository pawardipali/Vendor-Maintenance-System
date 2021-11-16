import { TestBed } from '@angular/core/testing';

import { GetVendorService } from './get-vendor.service';

describe('GetVendorService', () => {
  let service: GetVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
