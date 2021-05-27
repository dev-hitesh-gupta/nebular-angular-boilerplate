import {Injectable} from '@angular/core';
import {ChangePasswordModel} from '../models/change-password.model';
import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';

@Injectable()
export class ChangePasswordAdapter implements IAdapter<ChangePasswordModel> {
  adaptToModel(resp: any): any {
    return resp;
  }
  adaptFromModel(data: ChangePasswordModel): any {
    return {
      username: data.username,
      password: data.newPassword,
      oldPassword: data.password,
    };
  }
}
