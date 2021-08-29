import { Eventing } from "../Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  private models: T[] = [];
  private events: Eventing = new Eventing();

  constructor(private baseUrl: string, private deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetchAll(): void {
    axios.get(this.baseUrl).then((response: AxiosResponse) => {
      const data = response.data;
      data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  }
}
