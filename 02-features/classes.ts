abstract class Vehicle {
  constructor(private color: string) {} // Using the modifiers word creates and assigns the color property on the fly

  public honk(): void {
    console.log("beep");
  }

  public getColor(): string {
    return this.color;
  }
  public abstract drive(): void;
}

class Car extends Vehicle {
  public drive(): void {
    console.log("Driving the CAR around");
  }
}

const aCar = new Car("red");

aCar.drive();
aCar.honk();
console.log(aCar.getColor());
