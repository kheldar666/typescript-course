export interface GetSetAttributes<T> {
  get(propName: string): any;
  set(update: T): void
}

export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): any {
    const value = this.data[propName as keyof T];
    if (value) {
      return value;
    }
    throw new Error("Undefined Property Name");
  }

  getData():T {
    return this.data
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
