import { ModelCollection } from "../../models/base/ModelCollection";

export abstract class CollectionView<T, K> {
  private _rootElement: string = "div";

  constructor(
    private collection: ModelCollection<T, K>,
    private parent: Element
  ) {}

  protected get rootElement() {
    return this._rootElement;
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    const itemParent = document.createElement(this.rootElement);

    for (let i = 0; i < this.collection.length; i++) {
      this.renderItem(this.collection.models[i], itemParent);
    }

    templateElement.content.append(itemParent);
    this.parent.append(templateElement.content);
  }

  protected abstract renderItem(model: T, itemParent: Element): void;
}
