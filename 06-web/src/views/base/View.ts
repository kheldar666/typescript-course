import { Events } from "../../models/Eventing";

export abstract class View<T extends Events> {
  regions: { [key: string]: Element } = {};

  constructor(private _parent: Element, private _model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  get model(): T {
    return this._model;
  }

  bindModel() {
    this._model.on("change", () => {
      this.render();
    });
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render = (): void => {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

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
