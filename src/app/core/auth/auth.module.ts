import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgxPermissionsModule} from 'ngx-permissions';
import {AuthService} from './auth.service';
import {Adapters} from './adapters';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxPermissionsModule.forChild(), HttpClientModule],
  providers: [AuthService, ...Adapters],
})
export class AuthModule {}
