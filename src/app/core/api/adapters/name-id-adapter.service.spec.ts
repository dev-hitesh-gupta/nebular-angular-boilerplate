import {TestBed} from '@angular/core/testing';

import {NameIdAdapterService} from './name-id-adapter.service';

describe('NameIdAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameIdAdapterService = TestBed.get(NameIdAdapterService);
    expect(service).toBeTruthy();
  });
});
