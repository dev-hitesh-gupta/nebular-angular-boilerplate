import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChangePasswordModule} from './change-password/change-password.module';
import {CoreModule} from './core/core.module';
import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';
import {ThemeModule} from './theme/theme.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    ChangePasswordModule,
    // ForgotPasswordModule,
    HttpClientModule,
    CoreModule,
    ThemeModule.forRoot(),
    MainModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
