import {HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentUserAdapter} from '@athlete-first/core/auth/adapters/current-user-adapter.service';
import {LoginAdapter} from '@athlete-first/core/auth/adapters/login-adapter.service';
import {User} from '@athlete-first/core/auth/models/user.model';
import {environment} from '@athlete-first/env/environment';
import {NgxPermissionsService} from 'ngx-permissions';
import {Observable, of, Subject, throwError} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';

import {AnyAdapter} from '../api/adapters/any-adapter.service';
import {ApiService} from '../api/api.service';
import {AuthTokenSkipHeader} from '../interceptors/auth.interceptor';
import {ErrToastSkipHeader} from '../interceptors/error.interceptor';
import {UserSessionStoreService as StoreService} from '../store/user-session-store.service';
import {
  ForgetPasswordCommand,
  GetCurrentUserCommand,
  GetTokenCommand,
  LoginCommand,
  RefreshTokenCommand,
  ResetPasswordCommand,
  VerifyResetPasswordLinkCommand,
} from './commands';
import {LoginModel} from './models/login.model';

@Injectable()
export class AuthService {
  redirectUrl: string;
  private readonly authHeaders = new HttpHeaders().set(AuthTokenSkipHeader, '');

  constructor(
    private readonly router: Router,
    private readonly store: StoreService,
    private readonly apiService: ApiService,
    private readonly currentUserAdapter: CurrentUserAdapter,
    private readonly loginAdapter: LoginAdapter,
    private readonly anyAdapter: AnyAdapter,
    private readonly permissionsService: NgxPermissionsService,
  ) {}

  authorizationError: Subject<any> = new Subject<any>();

  public isLoggedIn(): Observable<boolean> {
    return this.currentUser().pipe(
      switchMap(user => {
        if (user && user.id) {
          return of(true);
        } else {
          return of(false);
        }
      }),
    );
  }

  public isLoggedWithLastLoginIn(): Observable<boolean> {
    return this.currentUser().pipe(
      switchMap(user => {
        if (user && user.id && user.lastLogin) {
          return of(true);
        } else {
          return of(false);
        }
      }),
    );
  }

  public currentUser(): Observable<User> {
    const user = this.store.getUser();
    const hasToken = !!this.store.getAccessToken();
    if (user && user.id) {
      this.permissionsService.loadPermissions(user.permissions);
      return of(user);
    } else if (!hasToken) {
      return throwError('No token available');
    } else {
      const command: GetCurrentUserCommand<User> = new GetCurrentUserCommand(
        this.apiService,
        this.currentUserAdapter,
      );
      command.parameters = {
        headers: new HttpHeaders().set(ErrToastSkipHeader, ''),
      };
      return command.execute().pipe(
        tap(res => {
          if (!res.lastLogin) {
            this.store.setUser(res);
            setTimeout(() => {
              this.router.navigate(['change-password']);
            });
          } else {
            this.permissionsService.loadPermissions(res.permissions);
            this.store.setUser(res);
          }
        }),
      );
    }
  }

  // sonarignore:start
  public forgetPasswordReq(email: string): Observable<any> {
    const command: ForgetPasswordCommand<any> = new ForgetPasswordCommand(
      this.apiService,
      this.anyAdapter,
    );
    // sonarignore:end
    command.parameters = {
      data: {
        username: email.toLowerCase(),
        client_id: environment.clientId,
        client_secret: environment.clientSecret,
      },
      observe: 'response',
      headers: this.authHeaders,
    };
    return command.execute();
  }

  // sonarignore:start
  public verifyResetPasswordLink(token: string): Observable<any> {
    const command: VerifyResetPasswordLinkCommand<any> = new VerifyResetPasswordLinkCommand(
      this.apiService,
      this.anyAdapter,
    );
    // sonarignore:end
    command.parameters = {
      query: new HttpParams().set('token', token),
      headers: this.authHeaders,
    };
    return command.execute();
  }

  // sonarignore:start
  public resetPassword(token: string, password: string): Observable<any> {
    const command: ResetPasswordCommand<any> = new ResetPasswordCommand(
      this.apiService,
      this.anyAdapter,
    );
    // sonarignore:end
    command.parameters = {
      data: {
        token,
        password,
        client_id: environment.clientId,
        client_secret: environment.clientSecret,
      },
      observe: 'response',
      headers: this.authHeaders,
    };
    return command.execute();
  }

  // sonarignore:start
  public login(username: string, password: string): Observable<any> {
    // sonarignore:end
    this.store.setUser({
      username,
    } as User);
    const command: LoginCommand<LoginModel> = new LoginCommand(
      this.apiService,
      this.loginAdapter,
    );
    command.parameters = {
      data: {
        username: username.toLowerCase(),
        password,
        clientId: environment.clientId,
        clientSecret: environment.clientSecret,
      },
      observe: 'response',
      headers: this.authHeaders,
    };
    return command.execute();
  }

  public authorize(secret: string): void {
    const user = this.store.getUser();
    if (!user.username) {
      this.router.navigate(['login']);
    }
    // sonarignore:start
    const command: GetTokenCommand<any> = new GetTokenCommand(
      this.apiService,
      this.anyAdapter,
    );
    // sonarignore:end
    command.parameters = {
      data: {
        username: user.username.toLowerCase(),
        clientId: environment.clientId,
        code: secret,
      },
      headers: this.authHeaders,
    };
    command.execute().subscribe(
      response => {
        if (response.accessToken && response.refreshToken) {
          this.store.saveAccessToken(response.accessToken);
          this.store.saveRefreshToken(response.refreshToken);
          this.router.navigate([environment.homePath]);
        }
      },
      error => {
        this.authorizationError.next(error);
      },
    );
  }

  // sonarignore:start
  public refreshToken(): Observable<any> {
    // sonarignore:end
    const refreshToken = this.store.getRefreshToken();
    if (!refreshToken) {
      return of(false);
    }
    // sonarignore:start
    const command: RefreshTokenCommand<any> = new RefreshTokenCommand(
      this.apiService,
      this.anyAdapter,
    );
    // sonarignore:end
    command.parameters = {
      data: {
        refreshToken,
      },
    };
    return command
      .execute()
      .pipe(
        tap(
          response => {
            if (response.accessToken && response.refreshToken) {
              this.store.clearAll();
              this.store.saveAccessToken(response.accessToken);
              this.store.saveRefreshToken(response.refreshToken);
            } else {
              this.logout();
            }
          },
          err => {
            this.logout();
          },
        ),
      )
      .pipe(catchError(this.handleError));
  }

  public logout(): void {
    this.store.clearAll();
    this.permissionsService.flushPermissions();
    window.location.href = 'login';
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Something bad happened; please try again later.');
  }
}
