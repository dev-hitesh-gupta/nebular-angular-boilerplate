import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';
import {ApiService} from '@athlete-first/core/api/api.service';
import {GetAPICommand} from '@athlete-first/core/api/commands';
import {environment} from '@athlete-first/env/environment';

export class GetTenantProfileCommand<T> extends GetAPICommand<T> {
  constructor(apiService: ApiService, adapter: IAdapter<T>) {
    super(apiService, adapter, `${environment.userApiUrl}/`);
  }
}
