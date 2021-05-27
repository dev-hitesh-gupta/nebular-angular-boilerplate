import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';
import {RouteComponentBase} from '@athlete-first/core/route-component-base';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'athlete-first-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent extends RouteComponentBase {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    protected readonly translateSvc: LocalizationTranslateService,
  ) {
    super(route, location);
    this.translate = this.translateSvc.translate;
  }

  translate: TranslateService;
}
