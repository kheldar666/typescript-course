import "reflect-metadata";

const plane = {
  color: "red",
  fly(): void {
    console.log("Taking off");
  },
};

// Define Metadata at Class level
Reflect.defineMetadata("note", "Hi there", plane);
Reflect.defineMetadata("height", 10, plane);

console.log("Metadata are not visible on the object itself", plane);

const note = Reflect.getMetadata("note", plane);
const height = Reflect.getMetadata("height", plane);

console.log("First Metadata", note);
console.log("Second one", note);

//Metadata on a Property
Reflect.defineMetadata("colorShade", "dark", plane, "color");

const shade = Reflect.getMetadata("colorShade", plane, "color");
console.log(shade);

// On a function
Reflect.defineMetadata("altitude", "10000ft", plane, "fly");

const altitude = Reflect.getMetadata("altitude", plane, "fly");
console.log(altitude);
