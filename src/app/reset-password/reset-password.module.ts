import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ThemeModule} from '@athlete-first/theme/theme.module';
import {TranslateModule} from '@ngx-translate/core';

import {ResetPasswordRoutingModule} from './reset-password-routing.module';
import {ResetPasswordComponent} from './reset-password.component';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule.forRoot(),
    ResetPasswordRoutingModule,
    TranslateModule,
  ],
})
export class ResetPasswordModule {}
