import axios, { AxiosResponse } from "axios";

export interface Identity {
  id?: number;
}

export interface Syncable {
  fetch(): Promise<void>;
  save(): Promise<void>;
}

export class Sync<T extends Identity> {
  constructor(private baseUrl: string) {}

  fetch(id: number): Promise<T> {
    return axios
      .get(this.baseUrl + "/" + id)
      .then((response: AxiosResponse) => {
        return Promise.resolve<T>(response.data as T);
      })
      .catch((err) => {
        return Promise.reject<T>(err);
      });
  }

  save(data: T): Promise<T> {
    const { id } = data;
    if (!id) {
      return axios
        .post(this.baseUrl, data)
        .then((response: AxiosResponse) => {
          return Promise.resolve<T>(response.data as T);
        })
        .catch((err) => {
          return Promise.reject<T>(err);
        });
    } else {
      return axios
        .put(this.baseUrl + "/" + id, data)
        .then((response: AxiosResponse) => {
          return Promise.resolve<T>(response.data as T);
        })
        .catch((err) => {
          return Promise.reject<T>(err);
        });
    }
  }
}
