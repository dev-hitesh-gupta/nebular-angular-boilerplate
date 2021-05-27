import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';
import {ApiService} from '@athlete-first/core/api/api.service';
import {PostAPICommand} from '@athlete-first/core/api/commands';
import {environment} from '@athlete-first/env/environment';

export class RefreshTokenCommand<T> extends PostAPICommand<T> {
  constructor(apiService: ApiService, adapter: IAdapter<T>) {
    super(apiService, adapter, `${environment.authApiUrl}/auth/token-refresh`);
  }
}