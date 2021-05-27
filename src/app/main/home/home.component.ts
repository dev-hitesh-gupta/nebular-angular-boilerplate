import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';
import {RouteComponentBase} from '@athlete-first/core/route-component-base';
import {TranslateService} from '@ngx-translate/core';
import {UserSessionStoreService as StoreService} from '../../core/store/user-session-store.service';

@Component({
  selector: 'athlete-first-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends RouteComponentBase {
  // sonarignore:start
  constructor(
    private readonly store: StoreService,
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    protected readonly translateSvc: LocalizationTranslateService,
  ) {
    super(route, location);
    this.tenantName = this.store.getTenantName();
    this.translate = this.translateSvc.translate;
  }

  translate: TranslateService;
  public tenantName: string;

  async ngOnInit() {
    super.ngOnInit();
  }
}
