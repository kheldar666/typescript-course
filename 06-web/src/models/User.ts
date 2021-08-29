import axios, { AxiosResponse } from "axios";
import { Events } from "../interfaces/Events";
import { UserProps } from "../interfaces/UserProps";
import { Eventing } from "./Eventing";
import { Callback } from "./Types";

const JSON_SERVER_URL = "http://localhost:3000/users";

export class User implements Events {
  private eventing: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName as keyof UserProps];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(JSON_SERVER_URL + "/" + this.get("id"))
      .then((response: AxiosResponse) => {
        this.set(response.data as UserProps);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  save(): void {
    const userId = this.get("id");
    if (!userId) {
      axios
        .post(JSON_SERVER_URL, this.data)
        .then((response: AxiosResponse) => console.log("User saved"))
        .catch((err) => console.error(err));
    } else {
      axios
        .put(JSON_SERVER_URL + "/" + userId, this.data)
        .then((response: AxiosResponse) => console.log("User updated"))
        .catch((err) => console.error(err));
    }
  }

  on(eventName: string, callback: Callback): void {
    this.eventing.on(eventName, callback);
  }

  trigger(eventName: string): void {
    this.eventing.trigger(eventName);
  }
}
