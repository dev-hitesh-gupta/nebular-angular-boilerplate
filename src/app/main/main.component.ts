import {Component} from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import {AuthService} from '@athlete-first/core/auth/auth.service';
import {ComponentBase} from '@athlete-first/core/component-base';
import {UserSessionStoreService as StoreService} from '@athlete-first/core/store/user-session-store.service';
import {NbMenuItem, NbMenuService, NbSidebarService} from '@nebular/theme';
import {isEqual, keys} from 'lodash';
import {NgxPermissionsObject, NgxPermissionsService} from 'ngx-permissions';
import {distinctUntilChanged, filter} from 'rxjs/operators';

import {menuItem} from './pages-menu';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';

@Component({
  selector: 'athlete-first-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent extends ComponentBase {
  menuItems: NbMenuItem[] = menuItem(this.translateSvc.translate);

  constructor(
    private readonly permissionsService: NgxPermissionsService,
    private readonly router: Router,
    private readonly store: StoreService,
    private readonly authService: AuthService,
    private readonly menu: NbMenuService,
    private readonly sidebarService: NbSidebarService,
    protected readonly translateSvc: LocalizationTranslateService,
  ) {
    super();
    const ipadStdSize = 1200;
    menu.onItemClick().subscribe(() => {
      if (window.screen.availWidth <= ipadStdSize) {
        this.sidebarService.compact('menu-sidebar');
      }
    });

    router.events.subscribe(val => {
      this.menuItems = menuItem(this.translateSvc.translate);
      this.setMenus();
    });
  }

  ngOnInit() {
    super.ngOnInit();
    this.setMenus();
  }

  private setMenus() {
    this.permissionsService.permissions$
      .pipe(
        distinctUntilChanged(
          (
            currentValue: NgxPermissionsObject,
            previousValue: NgxPermissionsObject,
          ) => isEqual(keys(currentValue), keys(previousValue)),
        ),
      )
      .subscribe(() => {
        this._setHiddenMenus(this.menuItems);
      });

    this._subscriptions.push(
      this.router.events
        .pipe(filter(event => event instanceof RouterEvent))
        .subscribe(event => {
          if (event instanceof NavigationStart) {
            const authToken = this.store.getAccessToken();
            if (!authToken && event.url !== '/login') {
              this.authService.logout();
            }
            // this.loading = true;
            // Show loading indicator
          }
          if (event instanceof NavigationEnd) {
            // this.loading = false;
            // Hide loading indicator
          }
          if (event instanceof NavigationError) {
            // Hide loading indicator
            // this.loading = false;
            // Present error to user
            // console.log(event.error);
          }
        }),
    );
  }

  private _setHiddenMenus(menuItems: NbMenuItem[]) {
    menuItems.forEach(async menuToHide => {
      await this._setHidden(menuToHide);
      if (menuToHide.children && menuToHide.children.length > 0) {
        this._setHiddenMenus(menuToHide.children);
      }
    });
  }

  private async _setHidden(mItem: NbMenuItem) {
    mItem.hidden =
      mItem.data &&
      mItem.data.permission &&
      mItem.data.permission !== '*' &&
      !(await this.permissionsService.hasPermission(mItem.data.permission));
  }
}
