import {HttpHeaders} from '@angular/common/http';
import {Component} from '@angular/core';
import {ApiService} from '@athlete-first/core/api/api.service';
import {ComponentBase} from '@athlete-first/core/component-base';
import {AuthTokenSkipHeader} from '@athlete-first/core/interceptors/auth.interceptor';
import {UserSessionStoreService as StoreService} from '@athlete-first/core/store/user-session-store.service';
import {NbIconLibraries} from '@nebular/theme';

import {FontPack} from '@athlete-first/core/enums';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';

@Component({
  selector: 'athlete-first-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBase {
  private readonly authHeaders = new HttpHeaders().set(AuthTokenSkipHeader, '');

  constructor(
    private readonly store: StoreService,
    private readonly apiService: ApiService,
    private readonly iconLibraries: NbIconLibraries,
    private readonly ipsTranslate: LocalizationTranslateService,
  ) {
    super();
    this.iconLibraries.registerFontPack(FontPack.FontAwesomeSolid, {
      packClass: 'fas',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack(FontPack.FontAwesomeRegular, {
      packClass: 'far',
      iconClassPrefix: 'fa',
    });
  }

  tenantName: string;

  ngOnInit() {
    this.ipsTranslate.init();
    if (this.store.getTenantName()) {
      this.tenantName = this.store.getTenantName();
    } else {
      this.store.setTenantName('athlete-first');
    }
  }
}
