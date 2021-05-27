import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NbToggleModule} from '@nebular/theme';
import {TranslateModule} from '@ngx-translate/core';
import {ThemeModule} from '@athlete-first/theme/theme.module';

import {NgxPermissionsModule} from 'ngx-permissions';
import {ToastrModule} from 'ngx-toastr';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';

import {HeaderComponent} from './components/header/header.component';
import {TextSearchComponent} from './components/text-search/text-search.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [HeaderComponent, TextSearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPermissionsModule.forChild(),
    InputTextModule,
    TableModule,
    ConfirmDialogModule,
    DropdownModule,
    BsDropdownModule.forRoot(),
    MultiSelectModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    ThemeModule.forRoot(),
    NbToggleModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    TextSearchComponent,
    InputTextModule,
    TableModule,
    ConfirmDialogModule,
    DropdownModule,
    BsDropdownModule,
    MultiSelectModule,
    NbToggleModule,
    TranslateModule,
  ],
  providers: [ConfirmationService],
})
export class SharedModule {}
