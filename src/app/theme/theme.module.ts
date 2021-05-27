import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  NbActionsModule,
  NbAccordionModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbButtonModule,
  NbInputModule,
  NbDialogModule,
  NbWindowModule,
  NbListModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbTooltipModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbUserModule,
  NbDatepickerModule,
  NbBadgeModule,
  NbIconModule,
  NbSearchModule,
} from '@nebular/theme';
import {NbAuthModule} from '@nebular/auth';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbCardModule,
  NbAccordionModule,
  NbLayoutModule,
  NbMenuModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbActionsModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbButtonModule,
  NbListModule,
  NbInputModule,
  NbDialogModule,
  NbWindowModule,
  NbAlertModule,
  NbSpinnerModule,
  NbRadioModule,
  NbSelectModule,
  NbTooltipModule,
  NbUserModule,
  NbAuthModule,
  NbDatepickerModule,
  NbBadgeModule,
  NbIconModule,
  NbSearchModule,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot({
    name: 'dark',
  }).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
  ...NbDialogModule.forRoot().providers,
  ...NbWindowModule.forRoot().providers,
  ...NbAuthModule.forRoot().providers,
  ...NbDatepickerModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES],
  declarations: [],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    } as ModuleWithProviders<ThemeModule>;
  }
}
