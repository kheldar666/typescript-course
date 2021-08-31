import "reflect-metadata";
import { AppRouter } from "../../AppRouter";

export function controller(prefix: string) {
  // the argument here will be the constructor
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (const prototypeKey in target.prototype) {
      const routeHandler = target.prototype[prototypeKey];
      const path = Reflect.getMetadata("path", target.prototype, prototypeKey);
      const method = Reflect.getMetadata(
        "method",
        target.prototype,
        prototypeKey
      );

      if (path && method) {
        if (method === "get") router.get(`${prefix}${path}`, routeHandler);
        if (method === "post") router.post(`${prefix}${path}`, routeHandler);
      }
    }
  };
}
