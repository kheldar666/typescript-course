import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(prefix: string) {
  // the argument here will be the constructor
  return function (target: Function) {
    const router = AppRouter.getInstance();
    for (const prototypeKey in target.prototype) {
      const routeHandler = target.prototype[prototypeKey];

      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        prototypeKey
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        prototypeKey
      );

      const middlewares =
        Reflect.getMetadata(
          MetadataKeys.MIDDLEWARE,
          target.prototype,
          prototypeKey
        ) || [];

      if (path && method) {
        router[method](`${prefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
