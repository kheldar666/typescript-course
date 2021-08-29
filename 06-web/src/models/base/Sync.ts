import { Identity } from "./Identity";

export interface Syncable {
  fetch(): void;
  save(): void;
}

export interface Sync<T extends Identity> {
  fetch(id: number): Promise<T>;
  save(data: T): Promise<T>;
}
