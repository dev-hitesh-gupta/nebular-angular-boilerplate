import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NbMenuItem, NbMenuService, NbSidebarService} from '@nebular/theme';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '@athlete-first/core/auth/auth.service';
import {User} from '@athlete-first/core/auth/models/user.model';
import {PermissionKey} from '@athlete-first/core/auth/permission-key.enum';
import {ComponentBase} from '@athlete-first/core/component-base';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';
import {environment} from '@athlete-first/env/environment';
import {isEqual, keys} from 'lodash';
import {NgxPermissionsObject, NgxPermissionsService} from 'ngx-permissions';
import {distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'spl-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends ComponentBase {
  // sonarignore:start
  constructor(
    private readonly sidebarService: NbSidebarService,
    private readonly menuService: NbMenuService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly permissionsService: NgxPermissionsService,
    protected readonly translateSvc: LocalizationTranslateService, // sonarignore:end
  ) {
    super();
    this.translate = this.translateSvc.translate;
    this.userMenu = [
      {title: this.translate.instant('myProfileTitle'), link: 'main/profile'},
      {
        title: 'Change Password',
        link: 'change-password',
      },
      {title: this.translate.instant('logoutLbl'), data: {isLogout: true}},
    ];
  }

  translate: TranslateService;
  permissionKeys = PermissionKey;

  user: User;

  loading = false;
  userMenu: NbMenuItem[] = [];

  addAllowed = false;
  upsertAllowed = false;
  abstractPhoto =
    'https://www.bavarealtors.in/wp-content/uploads/2019/11/dummy-man-570x570.png';

  ngOnInit() {
    super.ngOnInit();
    this._subscriptions.push(
      this.menuService.onItemClick().subscribe(event => {
        if (event.item.data && event.item.data.isLogout) {
          this.authService.logout();
        }
      }),
    );

    this._subscriptions.push(
      this.authService.currentUser().subscribe(user => {
        this.user = user;
      }),
    );
  }

  checkPermissions() {
    return this.permissionsService.permissions$.pipe(
      distinctUntilChanged(
        (
          currentValue: NgxPermissionsObject,
          previousValue: NgxPermissionsObject,
        ) => isEqual(keys(currentValue), keys(previousValue)),
      ),
    );
  }

  private async _setHiddenMenus(menuItems: NbMenuItem[]) {
    await Promise.all(
      menuItems.map(async menuItem => {
        await this._setHidden(menuItem);
        if (menuItem.children && menuItem.children.length > 0) {
          await this._setHiddenMenus(menuItem.children);
        }
      }),
    );
    const shownMenus = menuItems.filter(mItem => !mItem.hidden);
    this.addAllowed = shownMenus.length > 0;
  }

  private async _setHidden(mItem: NbMenuItem) {
    mItem.hidden =
      mItem.data &&
      mItem.data.permission &&
      mItem.data.permission !== '*' &&
      !(await this.permissionsService.hasPermission(mItem.data.permission));
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.router.navigate([environment.homePath]);
  }

  openSettings() {
    this.router.navigate(['main/settings']);
  }
}
