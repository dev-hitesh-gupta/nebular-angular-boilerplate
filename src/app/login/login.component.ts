import {Location} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/auth/auth.service';
import {RouteComponentBase} from '../core/route-component-base';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';
import {TranslateService} from '@ngx-translate/core';
import {APPLICATION_STORE} from '@athlete-first/core/store/store.interface';
import {StorageService} from 'ngx-webstorage-service';
import {StoreKeys} from '@athlete-first/core/store/store-keys.enum';

@Component({
  selector: 'athlete-first-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends RouteComponentBase {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    private readonly authService: AuthService,
    protected readonly translateSvc: LocalizationTranslateService,
    @Inject(APPLICATION_STORE) private readonly store: StorageService,
  ) {
    super(route, location);

    this.translate = this.translateSvc.translate;
  }

  translate: TranslateService;

  errorMessage = null;

  protected router: Router;
  loading = false;
  user = {
    username: '',
    password: '',
  };
  submitted: boolean;
  rememberMe: boolean;

  ngOnInit() {
    super.ngOnInit();
    this.rememberMe = !!this.store.get(StoreKeys.REMEMBER_USER);
    this.user.username = this.store.get(StoreKeys.REMEMBER_USER);
  }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    // If remember me is checked before
    if (this.rememberMe) {
      this.store.set(StoreKeys.REMEMBER_USER, this.user.username);
    }

    this.loading = true;
    this._subscriptions.push(
      this.authService.login(this.user.username, this.user.password).subscribe(
        response => {
          this.loading = false;
          if (response.body && response.body.code) {
            this.authService.authorize(response.body.code);
          }
        },
        () => {
          this.loading = false;
        },
      ),
    );
  }

  rememberMeHandler(isChecked: boolean) {
    if (isChecked) {
      this.store.set(StoreKeys.REMEMBER_USER, this.user.username);
    }
  }
}
