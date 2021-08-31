import "reflect-metadata";

@printMetadata
class Plane {
  color: "red";

  @markFunction("My Secret")
  fly(): void {
    console.log("Taking off");
  }

  land(): void {
    console.log("Landing now");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (const key in target.prototype) {
    //key here are the functions of Plane, not property like "color"
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    if (secret) {
      console.log(`Secret metadata for key "${key}" is "${secret}"`);
    } else {
      console.log(`No Secret metadata for key (ie:function): ${key}`);
    }
  }
}
