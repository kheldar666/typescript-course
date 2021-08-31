import "reflect-metadata";

@controller
class Plane {
  color: "red";

  @get("My Secret")
  fly(): void {
    console.log("Taking off");
  }

  land(): void {
    console.log("Landing now");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    //key here are the functions of Plane, not property like "color"
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);

    if (path) {
      console.log(`Path metadata for key "${key}" is "${path}"`);
    } else {
      console.log(`No Path metadata for key (ie:function): ${key}`);
    }

    // router.get(path, middleware, target.prototype[key]
  }
}
