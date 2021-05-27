import {NameId} from '@athlete-first/core/models';
import {Role} from '@athlete-first/core/store/models/role.model';
import {Gender} from './gender.enum';
import {UserStatus} from '@athlete-first/core/enums/user-status.enum';

export class User {
  id: number;
  firstName = '';
  middleName?: string;
  lastName?: string;
  username: string;
  email?: string;
  phone?: string;
  roleId: number;
  role: Role;
  permissions: string[];
  tenant: NameId;
  password?: string;
  lastLogin?: Date;
  status: UserStatus;
  externalId: string;
  gender: {id: Gender; name: string};
  designation: string;
  photo?: string;

  get fullName(): string {
    let fullName = this.firstName;
    if (this.middleName) {
      fullName = fullName.concat(' ').concat(this.middleName);
    }
    if (this.lastName) {
      fullName = fullName.concat(' ').concat(this.lastName);
    }
    return fullName;
  }

  constructor(data?: Partial<User>) {
    if (data) {
      this.id = data.id;
      this.firstName = data.firstName;
      this.middleName = data.middleName;
      this.lastName = data.lastName;
      this.username = data.username;
      this.email = data.email;
      this.phone = data.phone;
      this.roleId = data.roleId;
      this.permissions = data.permissions;
      this.externalId = data.externalId;
      this.designation = data.designation;
      this.photo = data.photo;
    }
  }
}
