export class Success {
  success = false;
  constructor(data?: Partial<Success>) {
    if (data) {
      this.success = data.success || false;
    }
  }
}
