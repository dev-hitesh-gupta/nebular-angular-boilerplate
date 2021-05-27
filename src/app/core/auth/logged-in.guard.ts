import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {environment} from '@athlete-first/env/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      tap(res => {
        if (res) {
          setTimeout(() => {
            this.router.navigate([environment.homePath]);
          });
        }
      }),
      catchError(() => of(true)),
    );
  }
}
