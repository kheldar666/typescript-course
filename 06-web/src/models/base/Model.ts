import { Eventing, Events } from "../Eventing";
import { ApiSync, Identity, Syncable } from "../ApiSync";
import { GetSetAttributes, ModelAttributes } from "../ModelAttributes";

export abstract class Model<T extends Identity>
  implements Events, Syncable, GetSetAttributes<T>
{
  protected constructor(
    private attributes: ModelAttributes<T>,
    private sync: ApiSync<T>,
    private eventing: Eventing
  ) {}

  set(update: T): void {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch(): Promise<void> {
    const ID = this.get("id");
    if (ID) {
      return this.sync
        .fetch(ID)
        .then((response) => {
          this.set(response);
        })
        .catch((err) => {
          console.error(err);
          this.trigger("error");
        });
    }
    return Promise.reject("ID is undefined");
  }

  save(): Promise<void> {
    return this.sync
      .save(this.attributes.getAll())
      .then((response) => {
        this.attributes.set(response);
        this.trigger("save");
      })
      .catch((err) => {
        console.error(err);
        this.trigger("error");
      });
  }

  // get get() {
  //   return this.attributes.get;
  // }
  //
  // get getAll() {
  //   return this.attributes.getAll;
  // }
  //
  // get on() {
  //   return this.eventing.on;
  // }
  //
  // get trigger() {
  //   return this.eventing.trigger;
  // }

  // Much shorter version
  get = this.attributes.get;
  getAll = this.attributes.getAll;
  on = this.eventing.on;
  trigger = this.eventing.trigger;
}
