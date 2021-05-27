import {Injectable} from '@angular/core';
import {LoginModel} from '@athlete-first/core/auth/models/login.model';
import {IAdapter} from '@athlete-first/core/api/adapters/i-adapter';

@Injectable()
export class LoginAdapter implements IAdapter<LoginModel> {
  adaptToModel(resp: any): any {
    console.log('test',resp);
    return resp;
  }
  adaptFromModel(data: LoginModel): any {
    return {
      username: data.username,
      password: data.password,
      client_id: data.clientId,
      client_secret: data.clientSecret,
    };
  }
}
