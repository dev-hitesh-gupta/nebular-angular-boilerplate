import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GetTenantProfileCommand, GetRolesCommand} from './commands';
import {InMemoryStorageService} from 'ngx-webstorage-service';
import {cloneDeep} from 'lodash';
import {Observable, of} from 'rxjs';
import {tap, map} from 'rxjs/operators';

import {AnyAdapter} from '../api/adapters/any-adapter.service';
import {ApiService} from '../api/api.service';
import {RolesAdapter} from './adapters/roles-adapter.service';
import {Role} from './models/role.model';
import {StoreKeys} from './store-keys.enum';
import {TenantProfileAdapter} from '../adapters/tenant-profile-adapter.service';
import {TenantDetails} from '../models/tenant-details.model';
import {AuthTokenSkipHeader} from '../interceptors/auth.interceptor';

@Injectable()
export class SystemStoreFacadeService {
  constructor(
    private readonly inMemoryStore: InMemoryStorageService,
    private readonly rolesAdapter: RolesAdapter,
    private readonly tenProfileAdapter: TenantProfileAdapter,
    private readonly anyAdapter: AnyAdapter,
    private readonly apiService: ApiService,
  ) {}

  getRoles(reset = false): Observable<Role[]> {
    const rolesInStore = this.inMemoryStore.get(StoreKeys.ROLES);
    if (!reset && rolesInStore) {
      return of(cloneDeep(rolesInStore));
    } else {
      const command: GetRolesCommand = new GetRolesCommand(
        this.apiService,
        this.rolesAdapter,
      );
      return command.execute().pipe(
        tap(roles => {
          this.inMemoryStore.set(StoreKeys.ROLES, cloneDeep(roles));
        }),
      );
    }
  }

  getTenantProfile(reset = false): Observable<TenantDetails> {
    const tenantProfileInStore = this.inMemoryStore.get(
      StoreKeys.TENANT_DETAILS,
    );

    if (!reset && tenantProfileInStore) {
      return of(cloneDeep(tenantProfileInStore));
    } else {
      const command: GetTenantProfileCommand<TenantDetails> = new GetTenantProfileCommand(
        this.apiService,
        this.tenProfileAdapter,
      );

      command.parameters = {
        headers: new HttpHeaders().set(AuthTokenSkipHeader, ''),
      };

      return command.execute().pipe(
        map(tenDetails => {
          this.inMemoryStore.set(
            StoreKeys.TENANT_DETAILS,
            cloneDeep(tenDetails),
          );
          return tenDetails;
        }),
      );
    }
  }

  getLocale(reset = false): Observable<string> {
    return this.getTenantProfile(reset).pipe(map(details => details.locale));
  }

  // sonarignore:start
  setFilters(filterObj: any, filterRoute) {
    // sonarignore:end
    let inStore = this.inMemoryStore.get(StoreKeys.FILTERS);
    if (!inStore) {
      inStore = {};
    }
    if (!inStore[filterRoute]) {
      inStore[filterRoute] = {};
    }
    for (const prop in filterObj) {
      inStore[filterRoute][prop] = filterObj[prop];
    }

    this.inMemoryStore.set(StoreKeys.FILTERS, cloneDeep(inStore));
  }

  getFilters(filterRoute: string) {
    const filters = this.inMemoryStore.get(StoreKeys.FILTERS);
    return filters && filters[filterRoute];
  }

  clearAll() {
    this.inMemoryStore.remove(StoreKeys.ROLES);
    this.inMemoryStore.remove(StoreKeys.FILTERS);
  }
}
