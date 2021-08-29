import { Events } from "../../models/Eventing";

export abstract class View<T extends Events> {
  constructor(private _parent: Element, private _model: T) {
    this.bindModel();
  }

  abstract template(): string;

  abstract eventsMap(): { [key: string]: () => void };

  get model(): T {
    return this._model;
  }

  bindModel() {
    this._model.on("change", () => {
      this.render();
    });
  }

  render = (): void => {
    this._parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this._parent.append(templateElement.content);
  };

  bindEvents = (fragment: DocumentFragment): void => {
    const eventsMaps = this.eventsMap();
    for (let eventsKey in eventsMaps) {
      const [eventName, selector] = eventsKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMaps[eventsKey]);
      });
    }
  };
}
