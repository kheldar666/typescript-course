import axios, { AxiosResponse } from "axios";

const JSON_SERVER_URL = "http://localhost:3000/users";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName as keyof UserProps];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];
    for (let i = 0; i < handlers.length; i++) {
      handlers[i]();
    }
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
}
