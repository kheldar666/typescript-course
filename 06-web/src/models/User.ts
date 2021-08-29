import { ApiSync } from "./ApiSync";
import { Model } from "./base/Model";
import { Eventing } from "./Eventing";
import { ModelAttributes } from "./base/ModelAttributes";
import { Identity } from "./base/Identity";
import { Collection } from "./base/Collection";

const JSON_SERVER_URL = "http://localhost:3000/users";

export interface UserProps extends Identity {
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(data: UserProps) {
    return new User(
      new ModelAttributes<UserProps>(data),
      new ApiSync<UserProps>(JSON_SERVER_URL),
      new Eventing()
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(JSON_SERVER_URL, User.buildUser);
  }
}
