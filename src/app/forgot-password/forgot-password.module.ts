import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ForgotPasswordRoutingModule} from './forgot-password-routing.module';
import {ForgotPasswordComponent} from './forgot-password.component';
import {ThemeModule} from '@athlete-first/theme/theme.module';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule.forRoot(),
    ForgotPasswordRoutingModule,
    TranslateModule,
  ],
})
export class ForgotPasswordModule {}
