import { View } from "./base/View";
import { User } from "../models/User";

export class UserForm extends View<User> {
  template = (): string => {
    return `
            <div>
                <input type="text" id="new-name" placeholder="${this.model.get(
                  "name"
                )}">
                <button id="set-name">Set Name</button>
                <button id="set-age">Random Age</button>
                <button id="save-model">Save User</button>
            </div>
        `;
  };

  eventsMap = (): { [key: string]: () => void } => {
    return {
      "click:#set-age": this.onSetAgeClicked,
      "click:#set-name": this.onSetNameClicked,
      "click:#save-model": this.onSaveClicked,
    };
  };

  onSaveClicked = (): void => {
    this.model.save();
  };

  onSetAgeClicked = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClicked = (): void => {
    const inputNewName = document.getElementById("new-name");
    if (inputNewName) {
      const newName = (inputNewName as HTMLInputElement).value;
      if (newName) {
        this.model.set({ name: newName });
      }
    }
  };
}
