import {ComponentBase} from './component-base';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

export class RouteComponentBase extends ComponentBase {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
  ) {
    super();
  }

  getQueryParam(key: string) {
    return this.route.snapshot.queryParamMap.get(key);
  }

  getRouteParam(key: string) {
    return this.route.snapshot.paramMap.get(key);
  }

  goBack(): void {
    this.location.back();
  }
}
