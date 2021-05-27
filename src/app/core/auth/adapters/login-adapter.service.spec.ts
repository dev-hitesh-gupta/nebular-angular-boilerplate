import {TestBed} from '@angular/core/testing';

import {LoginAdapterService} from './login-adapter.service';

describe('LoginAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginAdapterService = TestBed.get(LoginAdapterService);
    expect(service).toBeTruthy();
  });
});
