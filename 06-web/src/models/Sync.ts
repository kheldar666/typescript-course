import axios, { AxiosResponse } from "axios";

export class Sync<T> {
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

  save(id: number, data: T): Promise<T> {
    if (!id) {
      console.log("Going to POST");
      return axios
        .post(this.baseUrl, data)
        .then((response: AxiosResponse) => {
          return Promise.resolve<T>(response.data as T);
        })
        .catch((err) => {
          return Promise.reject<T>(err);
        });
    } else {
      console.log("Going to PUT");
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
