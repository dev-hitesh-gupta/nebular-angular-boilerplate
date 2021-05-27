import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@athlete-first/core/auth/auth.guard';
import {LoggedInGuard} from '@athlete-first/core/auth/logged-in.guard';
import {environment} from '@athlete-first/env/environment';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {LastLoginGuard} from './core/auth/last-login.guard';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [LoggedInGuard],
  },
  {
    path: 'change-password',
    loadChildren:
      './change-password/change-password.module#ChangePasswordModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    loadChildren:
      './forgot-password/forgot-password.module#ForgotPasswordModule',
    canActivate: [LoggedInGuard],
  },
  {
    path: 'reset-password',
    loadChildren: './reset-password/reset-password.module#ResetPasswordModule',
    canActivate: [LoggedInGuard],
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule',
      },
    ],
    canActivate: [LastLoginGuard, NgxPermissionsGuard],
    canActivateChild: [LastLoginGuard, NgxPermissionsGuard],
    data: {
      permissions: {
        redirectTo: environment.errorPath,
      },
    },
  },
  {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule',
  },
  {
    path: '',
    redirectTo: environment.homePath,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: environment.homePath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
