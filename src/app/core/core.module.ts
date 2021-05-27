import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxPermissionsModule} from 'ngx-permissions';

import {TenantProfileAdapter} from './adapters/tenant-profile-adapter.service';
import {ApiModule} from './api/api.module';
import {AuthModule} from './auth/auth.module';
import {EnsureModuleLoadedOnce} from './ensure-module-loaded-once';
import {HttpInterceptorProviders} from './interceptors';
import {StoreModule} from './store/store.module';
import {LocalizationTranslateService} from './localization/localization-translate.service';

// AoT requires an exported function for factories
export function httpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export * from './api/commands';
export * from './models';
export * from './enums';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPermissionsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    StoreModule,
    AuthModule,
    ApiModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [StoreModule, AuthModule, ApiModule],
  providers: [
    HttpInterceptorProviders,
    TenantProfileAdapter,
    LocalizationTranslateService,
  ],
})
export class CoreModule extends EnsureModuleLoadedOnce {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
