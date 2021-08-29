export interface GetSetAttributes<T> {
  get(propName: string): any;
  set(update: T): void;
}

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    const value = this.data[key];
    if (value) {
      return value;
    }
    throw new Error(`Property "${key}" undefined`);
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll = (): T => {
    return this.data;
  };
}
