import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LocalizationTranslateService {
  constructor(public translate: TranslateService) {}

  init() {
    this.translate.setDefaultLang('en');
  }
}
