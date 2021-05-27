import {TestBed} from '@angular/core/testing';

import {LocalizationTranslateService} from './localization-translate.service';

describe('IpsTranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalizationTranslateService = TestBed.get(
      LocalizationTranslateService,
    );
    expect(service).toBeTruthy();
  });
});
