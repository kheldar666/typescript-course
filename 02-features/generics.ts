// Exemple of Generic Class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(["a", "b", "c"]);

// Example of Generics with Functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

// Generic Constraints
interface Printable {
  print(): void;
}

class Car implements Printable {
  print() {
    console.log("I am a car");
  }
}

class House implements Printable {
  print() {
    console.log("I am a house");
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<Printable>([new House(), new Car()]);
