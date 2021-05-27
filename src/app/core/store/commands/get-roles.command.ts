import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';
import {ApiService} from '@athlete-first/core/api/api.service';
import {GetListAPICommand} from '@athlete-first/core/api/commands';
import {environment} from '@athlete-first/env/environment';

import {Role} from '../models/role.model';

export class GetRolesCommand extends GetListAPICommand<Role> {
  constructor(apiService: ApiService, adapter: IAdapter<Role>) {
    super(apiService, adapter, `${environment.userApiUrl}/`);
  }
}
