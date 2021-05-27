import {Injectable} from '@angular/core';
import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';
import {User} from '@athlete-first/core/auth/models/user.model';
import {
  UserStatus,
  userStatusTypesMap,
} from '@athlete-first/core/enums/user-status.enum';
import {LocalizationTranslateService} from '@athlete-first/core/localization/localization-translate.service';

import {genderMap} from '../models/gender.enum';

@Injectable()
export class CurrentUserAdapter implements IAdapter<User> {
  constructor(protected readonly translateSvc: LocalizationTranslateService) {}

  adaptToModel(resp: any): User {
    const user: User = new User();
    if (resp) {
      user.id = resp.id;
      user.firstName = resp.firstName;
      user.middleName = resp.middleName;
      user.lastName = resp.lastName;
      user.username = resp.username;
      user.email = resp.email;
      user.phone = resp.phone;
      user.roleId = resp.roleId;
      user.role = resp.role;
      user.permissions = resp.permissions;
      user.lastLogin = resp.lastLogin;
      user.status =
        resp.status &&
        userStatusTypesMap(this.translateSvc.translate)[parseInt(resp.status)];
      user.externalId = resp.externalId;
      user.gender =
        resp.gender && genderMap(this.translateSvc.translate)[resp.gender];
      user.designation = resp.designation;
      user.photo = resp.photoUrl;
    }
    return user;
  }
  adaptFromModel(data: User): any {
    const dataToSend = Object.assign({}, data, {
      status: data.status,
    });
    if (data.status !== UserStatus.ACTIVE || !data.lastLogin) {
      dataToSend.username = data.email;
    }

    return dataToSend;
  }
}
