import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ThemeModule} from '@athlete-first/theme/theme.module';
import {TranslateModule} from '@ngx-translate/core';

import {ErrorRoutingModule} from './error-routing.module';
import {ErrorComponent} from './error.component';

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule, TranslateModule, ThemeModule],
})
export class ErrorModule {}
