import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';
import {ApiService} from '@athlete-first/core/api/api.service';
import {PatchAPICommand} from '@athlete-first/core/api/commands/patch-api.command';
import {environment} from '@athlete-first/env/environment';

export class ResetPasswordCommand<T> extends PatchAPICommand<T> {
  constructor(apiService: ApiService, adapter: IAdapter<T>) {
    super(apiService, adapter, `${environment.userApiUrl}/`);
  }
}
