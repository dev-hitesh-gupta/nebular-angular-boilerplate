import {NbMenuItem} from '@nebular/theme';
import {FontPack} from '@athlete-first/core/enums';
import {TranslateService} from '@ngx-translate/core';

export const menuItem = (translate: TranslateService): NbMenuItem[] => {
  return [
    {
      title: translate.instant('musicLibraryLbl'),
      icon: {icon: 'headphones', pack: FontPack.FontAwesomeSolid},
      link: '/main/home',
      home: true,
      data: {
        permission: '*',
      },
      children: [
        {
          title: translate.instant('musicLbl'),
          icon: {icon: 'music', pack: FontPack.FontAwesomeSolid},
          link: '/main/home',
          data: {
            permission: '*',
          },
        },
        {
          title: translate.instant('articleLbl'),
          icon: {icon: 'newspaper', pack: FontPack.FontAwesomeSolid},
          link: '/main/home',
          data: {
            permission: '*',
          },
        },
      ],
    },
    {
      title: translate.instant('userManagementLbl'),
      icon: {icon: 'users', pack: FontPack.FontAwesomeSolid},
      link: '/main/home',
      data: {
        permission: '*',
      },
      children: [
        {
          title: translate.instant('studentLbl'),
          icon: {icon: 'user', pack: FontPack.FontAwesomeSolid},
          link: '/main/home',
          data: {
            permission: '*',
          },
        },
        {
          title: translate.instant('teachertLbl'),
          icon: {icon: 'user', pack: FontPack.FontAwesomeSolid},
          link: '/main/home',
          data: {
            permission: '*',
          },
        },
        {
          title: translate.instant('studentgrpLbl'),
          icon: {icon: 'user', pack: FontPack.FontAwesomeSolid},
          link: '/main/home',
          data: {
            permission: '*',
          },
        },
      ],
    },
  ];
};
