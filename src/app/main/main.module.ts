import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '@athlete-first/shared/shared.module';
import {ThemeModule} from '@athlete-first/theme/theme.module';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {HomeModule} from './home/home.module'

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ThemeModule.forRoot(),
    HomeModule
  ],
})
export class MainModule {}
