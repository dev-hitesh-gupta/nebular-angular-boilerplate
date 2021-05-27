import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {IAdapter} from '../adapters/i-adapter';
import {ApiService} from '../api.service';
import {ICommand} from './i-command';

type HttpObserve = 'body' | 'events' | 'response';

export abstract class DelAPICommand<T> implements ICommand {
  constructor(
    protected readonly apiService: ApiService,
    protected readonly adapter: IAdapter<T>,
    protected readonly uri: string,
  ) {}

  parameters?: {
    query?: HttpParams;
    headers?: HttpHeaders;
    observe?: HttpObserve;
  };

  execute(): Observable<T> {
    let options: any;
    if (this.parameters) {
      options = {};
      options.observe = this.parameters.observe || 'body';
      if (this.parameters.headers) {
        options.headers = this.parameters.headers;
      }

      if (this.parameters.query) {
        options.params = this.parameters.query;
      }
    }
    return this.apiService
      .delete(this.uri, options)
      .pipe(map(resp => this.adapter.adaptToModel(resp)));
  }
}
