import { View } from "./base/View";
import { User } from "../models/User";

export class UserShow extends View<User> {
  template(): string {
    return `
            <div>
                <h1>User Detail</h1>
                <p>${this.model.get("name")}, ${this.model.get("age")}</p>
            </div>
        `;
  }
}
