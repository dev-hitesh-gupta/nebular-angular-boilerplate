import {TranslateService} from '@ngx-translate/core';

export enum Gender {
  Male = 'M',
  Female = 'F',
  Other = 'O',
}

export const genderMap = (translate: TranslateService) => {
  return {
    [Gender.Male]: {
      id: Gender.Male,
      name: translate.instant('maleLbl'),
    },
    [Gender.Female]: {
      id: Gender.Female,
      name: translate.instant('femaleLbl'),
    },
    [Gender.Other]: {
      id: Gender.Other,
      name: translate.instant('otherLbl'),
    },
  };
};
