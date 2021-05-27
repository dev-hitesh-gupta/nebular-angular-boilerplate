export interface IAdapter<T> {
  adaptToModel(resp: any): T;
  adaptFromModel(data: Partial<T>): any;
}
