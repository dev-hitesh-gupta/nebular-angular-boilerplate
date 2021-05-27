import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ThemeModule} from '@athlete-first/theme/theme.module';

import {SharedModule} from '../shared/shared.module';
import {ChangePasswordAdapter} from './adapters/change-password-adapter.service';
import {ChangePasswordRoutingModule} from './change-password-routing.module';
import {ChangePasswordComponent} from './change-password.component';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ThemeModule.forRoot(),
    ChangePasswordRoutingModule,
  ],
  providers: [ChangePasswordAdapter],
})
export class ChangePasswordModule {}
