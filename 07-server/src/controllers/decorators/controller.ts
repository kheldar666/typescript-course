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
        MetadataKeys.Path,
        target.prototype,
        prototypeKey
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        prototypeKey
      );

      if (path && method) {
        router[method](`${prefix}${path}`, routeHandler);
      }
    }
  };
}
