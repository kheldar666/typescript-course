import { Identity } from "./Identity";

export interface Syncable {
  fetch(): Promise<void>;
  save(): Promise<void>;
}

export interface Sync<T extends Identity> {
  fetch(id: number): Promise<T>;
  save(data: T): Promise<T>;
}
