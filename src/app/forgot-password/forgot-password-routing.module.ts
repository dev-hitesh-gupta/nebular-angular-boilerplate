import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NbAuthComponent} from '@nebular/auth';

import {ForgotPasswordComponent} from './forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: ForgotPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordRoutingModule {}
