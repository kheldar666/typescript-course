export class UserForm {
  constructor(private parent: HTMLElement) {}

  template(): string {
    return `
            <div>
                <h1>User Form</h1>
                <input type="text">
                <button>Click Me</button>
            </div>
        `;
  }
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  onButtonClick() {
    console.log("Yup! You clicked !");
  }
  onHoverH1() {
    console.log("Hooo.. you are hovering");
  }
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseover:h1": this.onHoverH1,
    };
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMaps = this.eventsMap();
    for (let eventsKey in eventsMaps) {
      const [eventName, selector] = eventsKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMaps[eventsKey]);
      });
    }
  }
}
