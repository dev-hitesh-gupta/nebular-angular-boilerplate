import {TestBed} from '@angular/core/testing';

import {CountAdapter} from './count-adapter.service';

describe('CountAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountAdapter = TestBed.get(CountAdapter);
    expect(service).toBeTruthy();
  });
});
