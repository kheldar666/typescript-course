import { ApiSync, Identity } from "./ApiSync";
import { Model } from "./base/Model";
import { Eventing } from "./Eventing";
import { ModelAttributes } from "./ModelAttributes";

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
}
