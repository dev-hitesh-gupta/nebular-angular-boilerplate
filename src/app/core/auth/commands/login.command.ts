import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';
import {ApiService} from '@athlete-first/core/api/api.service';
import {PostAPICommand} from '@athlete-first/core/api/commands/post-api.command';
import {environment} from '@athlete-first/env/environment';

export class LoginCommand<T> extends PostAPICommand<T> {
  constructor(apiService: ApiService, adapter: IAdapter<T>) {
    super(apiService, adapter, `${environment.authApiUrl}/auth/login`);
  }
}
