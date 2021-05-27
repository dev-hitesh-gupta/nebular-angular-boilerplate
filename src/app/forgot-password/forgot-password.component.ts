import {Location} from '@angular/common';
import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '@athlete-first/core/auth/auth.service';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';
import {RouteComponentBase} from '@athlete-first/core/route-component-base';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'athlete-first-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent extends RouteComponentBase {
  constructor(
    protected readonly route: ActivatedRoute,
    protected readonly location: Location,
    private readonly authService: AuthService,
    protected readonly translateSvc: LocalizationTranslateService,
    private readonly toastrService: ToastrService,
  ) {
    super(route, location);
    this.translate = this.translateSvc.translate;
  }

  translate: TranslateService;

  emailData: string;
  loading = false;

  successLbl = '';
  emailSentSuccessMsg = '';

  ngOnInit() {
    super.ngOnInit();
    this.getTranslations();
  }

  requestPassword(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this._subscriptions.push(
        this.authService.forgetPasswordReq(this.emailData).subscribe(
          () => {
            this.toastrService.success(
              this.emailSentSuccessMsg,
              this.successLbl,
            );
            this.loading = false;
          },
          err => {
            this.loading = false;
          },
        ),
      );
    }
  }

  getTranslations() {
    this.translate.get(['successLbl', 'emailSentSuccessMsg']).subscribe(res => {
      this.emailSentSuccessMsg = res.emailSentSuccessMsg;
      this.successLbl = res.successLbl;
    });
  }
}
