import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '@athlete-first/core/auth/auth.service';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';
import {RouteComponentBase} from '@athlete-first/core/route-component-base';
import {environment} from '@athlete-first/env/environment';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

import {ChangePasswordModel} from '../change-password/models/change-password.model';

@Component({
  selector: 'athlete-first-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent extends RouteComponentBase {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    private readonly toastrService: ToastrService,
    private readonly authService: AuthService,
    protected readonly translateSvc: LocalizationTranslateService,
  ) {
    super(route, location);
    this.translate = this.translateSvc.translate;
  }

  translate: TranslateService;

  passwordMismatch = false;
  tokenInvalid = false;
  loading = false;

  user: ChangePasswordModel = {
    username: '',
    confirmPassword: '',
    newPassword: '',
  };

  private token: string;

  ngOnInit() {
    super.ngOnInit();
    this.token = this.getQueryParam('token');
    this.loading = true;
    this._subscriptions.push(
      this.authService.verifyResetPasswordLink(this.token).subscribe(
        () => {
          // Do nothing if valid
          this.loading = false;
        },
        () => {
          this.tokenInvalid = true;
          this.loading = false;
        },
      ),
    );
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
      this.toastrService.error(
        this.translateSvc.translate.instant('passwordMatchMsg'),
        this.translateSvc.translate.instant('errorLbl'),
        {
          timeOut: environment.messageTimeout,
        },
      );
      return;
    }

    this.loading = true;

    this._subscriptions.push(
      this.authService
        .resetPassword(this.token, this.user.newPassword)
        .subscribe(
          res => {
            this.toastrService.success(
              this.translateSvc.translate.instant('passwordChangeSuccessMsg'),
              this.translateSvc.translate.instant('successLbl'),
              {
                timeOut: environment.messageTimeout,
              },
            );
            window.location.href = 'login';
            this.loading = false;
          },
          err => {
            this.loading = false;
          },
        ),
    );
  }
}
