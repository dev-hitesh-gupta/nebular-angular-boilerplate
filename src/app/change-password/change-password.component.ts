import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteComponentBase} from '../core/route-component-base';
import {ChangePasswordCommand} from './commands/change-password.command';
import {ChangePasswordModel} from './models/change-password.model';
import {ApiService} from '@athlete-first/core/api/api.service';
import {ChangePasswordAdapter} from './adapters/change-password-adapter.service';
import {UserSessionStoreService as StoreService} from '../core/store/user-session-store.service';
import {AuthService} from '../core/auth/auth.service';
import {ToastrService} from 'ngx-toastr';

import {environment} from '@athlete-first/env/environment';
import {HttpHeaders} from '@angular/common/http';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';
import {TranslateService} from '@ngx-translate/core';
import {User} from '@athlete-first/core/auth/models/user.model';

@Component({
  selector: 'athlete-first-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: [],
})
export class ChangePasswordComponent extends RouteComponentBase {
  constructor(
    protected readonly route: ActivatedRoute,
    private readonly store: StoreService,
    protected readonly location: Location,
    private readonly apiService: ApiService,
    private readonly changePasswordAdapter: ChangePasswordAdapter,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly authService: AuthService,
    protected readonly translateSvc: LocalizationTranslateService,
  ) {
    super(route, location);
    this.tenantName = this.store.getTenantName();

    this.translate = this.translateSvc.translate;
  }

  translate: TranslateService;
  passwordMismatch = false;
  tenantName: string;
  loading = false;
  user: ChangePasswordModel = {
    username: '',
    password: '',
    confirmPassword: '',
    newPassword: '',
  };
  currentUser: User;
  submitted: boolean;
  rememberMe: boolean;

  ngOnInit() {
    this.currentUser = this.store.getUser();
  }

  passwordMatch() {
    if (this.user.newPassword !== this.user.confirmPassword) {
      this.passwordMismatch = true;
    } else {
      this.passwordMismatch = false;
    }
  }

  updatePassword(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    if (this.user.newPassword !== this.user.confirmPassword) {
      return;
    }

    this.loading = true;
    const command: ChangePasswordCommand<ChangePasswordModel> = new ChangePasswordCommand(
      this.apiService,
      this.changePasswordAdapter,
    );

    const userInStore = this.store.getUser();

    this.user.username = userInStore.username;

    command.parameters = {
      data: this.user,
      headers: new HttpHeaders().set(
        'refresh-token',
        this.store.getRefreshToken(),
      ),
    };

    this._subscriptions.push(
      command.execute().subscribe(
        res => {
          this.authService.logout();
        },
        err => {
          this.loading = false;
          this.toastrService.error(err, 'ERROR !', {
            timeOut: environment.messageTimeout,
          });
        },
      ),
    );
  }
}
