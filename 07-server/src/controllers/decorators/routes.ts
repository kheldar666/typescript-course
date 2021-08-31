import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);
export const put = routeBinder(Methods.PUT);
export const del = routeBinder(Methods.DEL);
export const patch = routeBinder(Methods.PATCH);
export const options = routeBinder(Methods.OPTIONS);
