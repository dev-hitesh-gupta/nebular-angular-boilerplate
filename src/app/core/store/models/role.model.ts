import {NameId} from '@athlete-first/core/models';
import {RoleType} from '@athlete-first/core/enums';

export class Role extends NameId {
  permissions: string[] = [];
  roleType: RoleType;
}
