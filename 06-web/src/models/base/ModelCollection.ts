import { Eventing, Events } from "../Eventing";
import axios, { AxiosResponse } from "axios";

export interface Collection<T> {
  fetchAll(): void;
  length: number;
  models: T[];
}

export class ModelCollection<T, K> implements Events, Collection<T> {
  private _models: T[] = [];
  private events: Eventing = new Eventing();

  constructor(private baseUrl: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get models() {
    return this._models;
  }

  fetchAll = (): void => {
    axios.get(this.baseUrl).then((response: AxiosResponse) => {
      const data = response.data;
      data.forEach((value: K) => {
        this._models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  };

  get length() {
    return this._models.length;
  }
}
