import {User} from '@athlete-first/core/auth/models/user.model';
import {Inject, Injectable} from '@angular/core';
import {InMemoryStorageService, StorageService} from 'ngx-webstorage-service';

import {StoreKeys} from './store-keys.enum';
import {APPLICATION_STORE} from './store.interface';

@Injectable()
export class UserSessionStoreService {
  constructor(
    @Inject(APPLICATION_STORE) private readonly store: StorageService,
    private readonly inMemoryStore: InMemoryStorageService,
  ) {}

  public saveAccessToken(token: string): boolean {
    this.store.set(StoreKeys.ACCESS_TOKEN_KEY, token);
    return true;
  }

  public getAccessToken(): string {
    return this.store.get(StoreKeys.ACCESS_TOKEN_KEY);
  }

  public removeAccessToken(): boolean {
    this.store.remove(StoreKeys.ACCESS_TOKEN_KEY);
    return true;
  }

  public saveRefreshToken(token: string): boolean {
    this.store.set(StoreKeys.REFRESH_TOKEN_KEY, token);
    return true;
  }

  public getRefreshToken(): string {
    return this.store.get(StoreKeys.REFRESH_TOKEN_KEY);
  }

  public removeRefreshToken(): boolean {
    this.store.remove(StoreKeys.REFRESH_TOKEN_KEY);
    return true;
  }

  public setUser(user: User): void {
    this.inMemoryStore.set(StoreKeys.USER_KEY, user);
  }

  public getUser(): User {
    return this.inMemoryStore.get(StoreKeys.USER_KEY);
  }

  public setTenantName(name: string): void {
    this.inMemoryStore.set(StoreKeys.TENANT_KEY, name);
  }

  public getTenantName(): string {
    return this.inMemoryStore.get(StoreKeys.TENANT_KEY);
  }

  public clearAll(): void {
    this.inMemoryStore.remove(StoreKeys.USER_KEY);
    this.store.remove(StoreKeys.ACCESS_TOKEN_KEY);
    this.store.remove(StoreKeys.REFRESH_TOKEN_KEY);
  }
}
