import { Eventing, Events } from "./Eventing";
import { Callback } from "./Types";
import { Identity, Sync, Syncable } from "./Sync";
import { Attributes, GetSetAttributes } from "./Attributes";

const JSON_SERVER_URL = "http://localhost:3000/users";

export interface UserProps extends Identity {
  name?: string;
  age?: number;
}

export class User implements Events, Syncable, GetSetAttributes<UserProps> {
  private eventing: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(JSON_SERVER_URL);
  private attributes: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attributes = new Attributes<UserProps>(data);
  }

  get(propName: string): any {
    return this.attributes.get(propName);
  }
  set(update: UserProps): void {
    this.attributes.set(update);
  }

  fetch(): Promise<void> {
    return this.sync
      .fetch(this.attributes.get("id") as number)
      .then((response) => {
        this.attributes.set(response);
      })
      .catch((err) => console.error(err));
  }

  save(): Promise<void> {
    return this.sync
      .save(this.attributes.getData())
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
