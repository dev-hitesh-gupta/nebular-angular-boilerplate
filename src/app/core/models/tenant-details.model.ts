export class TenantDetails {
  name: string;

  logo?: string;

  locale?: string;

  address?: string;

  constructor(data?: Partial<TenantDetails>) {
    if (data) {
      this.name = data.name;
      this.logo = data.logo;
      this.locale = data.locale;
      this.address = data.address;
    }
  }
}
