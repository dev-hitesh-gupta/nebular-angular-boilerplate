export class NameId {
  id: number;
  name: string;
  constructor(data?: Partial<NameId>) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }
}
