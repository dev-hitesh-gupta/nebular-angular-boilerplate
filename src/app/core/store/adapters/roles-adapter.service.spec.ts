import {TestBed} from '@angular/core/testing';

import {RolesAdapterService} from './roles-adapter.service';

describe('RolesAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolesAdapterService = TestBed.get(RolesAdapterService);
    expect(service).toBeTruthy();
  });
});
