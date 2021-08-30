import { View } from "./base/View";
import { User } from "../models/User";

export class UserLi extends View<User> {
  template(): string {
    return `
            <li>${this.model.get("name")}, ${this.model.get("age")}</li>
        `;
  }
}
