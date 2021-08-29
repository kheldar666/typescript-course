import { Eventing, Events } from "./Eventing";
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

  get get() {
    return this.attributes.get;
  }

  get set() {
    return this.attributes.set;
  }

  fetch(): Promise<void> {
    const userId = this.get("id");
    if (userId) {
      return this.sync
        .fetch(userId)
        .then((response) => {
          this.set(response);
        })
        .catch((err) => console.error(err));
    }
    return Promise.reject("Id undefined");
  }

  save(): Promise<void> {
    return this.sync
      .save(this.attributes.getData())
      .then((response) => {
        this.set(response);
      })
      .catch((err) => console.error(err));
  }

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }
}
