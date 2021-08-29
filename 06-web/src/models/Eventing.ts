import { Callback } from "./Types";

export abstract class Eventing {
  private events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];
    for (let i = 0; i < handlers.length; i++) {
      handlers[i]();
    }
  }
}
