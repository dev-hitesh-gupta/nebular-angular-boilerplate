import {TranslateService} from '@ngx-translate/core';

export enum UserStatus {
  REGISTERED = 0,
  CARE_GROUP_ASSIGNED,
  INVITATION_SMS_SENT,
  APP_INSTALLED,
  VERFICATION_DECLINED,
  VERIFICATION_ACCEPTED,
  TERMS_CONDITIONS_DECLINED,
  TERMS_CONDITIONS_ACCEPTED,
  ACTIVE = 10,
  REQUEST_FOR_DEACTIVATION,
  INACTIVE,
}

export const userStatusTypesMap = (translate: TranslateService) => {
  return {
    [UserStatus.REGISTERED]: {
      id: UserStatus.REGISTERED,
      name: translate.instant('UserStatus.REGISTERED'),
      status: 'warning',
    },
    [UserStatus.CARE_GROUP_ASSIGNED]: {
      id: UserStatus.CARE_GROUP_ASSIGNED,
      name: translate.instant('UserStatus.CARE_GROUP_ASSIGNED'),
      status: 'warning',
    },
    [UserStatus.INVITATION_SMS_SENT]: {
      id: UserStatus.INVITATION_SMS_SENT,
      name: translate.instant('UserStatus.INVITATION_SMS_SENT'),
      status: 'warning',
    },
    [UserStatus.APP_INSTALLED]: {
      id: UserStatus.APP_INSTALLED,
      name: translate.instant('UserStatus.APP_INSTALLED'),
      status: 'warning',
    },
    [UserStatus.VERFICATION_DECLINED]: {
      id: UserStatus.VERFICATION_DECLINED,
      name: translate.instant('UserStatus.VERFICATION_DECLINED'),
      status: 'danger',
    },
    [UserStatus.VERIFICATION_ACCEPTED]: {
      id: UserStatus.VERIFICATION_ACCEPTED,
      name: translate.instant('UserStatus.VERIFICATION_ACCEPTED'),
      status: 'warning',
    },
    [UserStatus.TERMS_CONDITIONS_DECLINED]: {
      id: UserStatus.TERMS_CONDITIONS_DECLINED,
      name: translate.instant('UserStatus.TERMS_CONDITIONS_DECLINED'),
      status: 'danger',
    },
    [UserStatus.TERMS_CONDITIONS_ACCEPTED]: {
      id: UserStatus.TERMS_CONDITIONS_ACCEPTED,
      name: translate.instant('UserStatus.TERMS_CONDITIONS_ACCEPTED'),
      status: 'warning',
    },
    [UserStatus.ACTIVE]: {
      id: UserStatus.ACTIVE,
      name: translate.instant('UserStatus.ACTIVE'),
      status: 'success',
    },
    [UserStatus.INACTIVE]: {
      id: UserStatus.INACTIVE,
      name: translate.instant('UserStatus.INACTIVE'),
      status: 'danger',
    },
    [UserStatus.REQUEST_FOR_DEACTIVATION]: {
      id: UserStatus.REQUEST_FOR_DEACTIVATION,
      name: translate.instant('UserStatus.REQUEST_FOR_DEACTIVATION'),
      status: 'danger',
    },
  };
};
