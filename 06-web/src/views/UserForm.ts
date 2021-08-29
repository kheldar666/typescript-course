import { View } from "./base/View";
import { User } from "../models/User";

export class UserForm extends View<User> {
  template = (): string => {
    return `
            <div>
                <h1>User Form</h1>
                <div>User Name :${this.model.get("name")}</div>
                <div>User Age :${this.model.get("age")}</div>
                <input type="text" id="new-name" value="">
                <button id="set-name">Set Name</button>
                <button id="set-age">Random Age</button>
            </div>
        `;
  };

  eventsMap = (): { [key: string]: () => void } => {
    return {
      "click:#set-age": this.onSetAgeClicked,
      "click:#set-name": this.onSetNameClicked,
    };
  };

  onSetAgeClicked = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClicked = (): void => {
    const inputNewName = document.getElementById("new-name");
    if (inputNewName) {
      const newName = (inputNewName as HTMLInputElement).value;
      this.model.set({ name: newName });
    }
  };
}
