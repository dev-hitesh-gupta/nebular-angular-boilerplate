import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.checkLogin(state.url);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.checkLogin(state.url);
  }

  canLoad(route: Route): Observable<boolean> {
    return this.checkLogin(`/${route.path}`);
  }

  private checkLogin(url: string): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      catchError(() => {
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return of(false);
      }),
    );
  }
}
