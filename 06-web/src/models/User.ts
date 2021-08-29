import { Events } from "../interfaces/Events";
import { UserProps } from "../interfaces/UserProps";
import { Eventing } from "./Eventing";
import { Callback } from "./Types";
import { Sync } from "./Sync";

const JSON_SERVER_URL = "http://localhost:3000/users";

export class User implements Events {
  private eventing: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(JSON_SERVER_URL);

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName as keyof UserProps];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): Promise<void> {
    return this.sync
      .fetch(this.get("id") as number)
      .then((response) => {
        this.set(response);
      })
      .catch((err) => console.error(err));
  }

  save(): Promise<void> {
    return this.sync
      .save(this.get("id") as number, this.data)
      .then((response) => {
        this.set(response);
      })
      .catch((err) => console.error(err));
  }

  on(eventName: string, callback: Callback): void {
    this.eventing.on(eventName, callback);
  }

  trigger(eventName: string): void {
    this.eventing.trigger(eventName);
  }
}
