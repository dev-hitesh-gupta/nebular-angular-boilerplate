import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '@athlete-first/shared/shared.module';
import {ThemeModule} from '@athlete-first/theme/theme.module';
import {NgxPermissionsModule} from 'ngx-permissions';


import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ThemeModule.forRoot(),
    NgxPermissionsModule.forChild(),
  ],
})
export class HomeModule {}
