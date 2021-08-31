import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, Request, RequestHandler, Response } from "express";

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      throw new Error("The request does not have any body property");
    }

    for (let key of keys) {
      if (!req.body[key]) {
        throw new Error(`Missing body property "${key}" in the request`);
      }
    }
    next();
  };
}

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

      const validators =
        Reflect.getMetadata(
          MetadataKeys.VALIDATOR,
          target.prototype,
          prototypeKey
        ) || [];

      if (path && method) {
        router[method](
          `${prefix}${path}`,
          middlewares,
          bodyValidators(validators),
          routeHandler
        );
      }
    }
  };
}
