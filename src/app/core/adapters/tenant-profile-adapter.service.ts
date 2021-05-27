import {Injectable} from '@angular/core';
import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';
import {TenantDetails} from '../models/tenant-details.model';

@Injectable()
export class TenantProfileAdapter implements IAdapter<TenantDetails> {
  adaptToModel(resp: any): TenantDetails {
    return new TenantDetails(resp);
  }
  adaptFromModel(data: TenantDetails): any {
    return data;
  }
}
