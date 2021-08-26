//Primitive Types
let apples: number = 5; // That's a type annotation
const speed: string = "fast";
const hasName: boolean = true;
const nothingMuch: null = null;

const nothing: undefined = undefined;

// Built in Objects
let now: Date = new Date();

// Array
const colors: string[] = ["red", "green", "blue"];
const myNumbers: number[] = [1, 2, 2, 4, 5];
const truths: boolean[] = [true, false, false, true];

//Classes
class Car {}
const car: Car = new Car();

//Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns 'any'
const json = '{"x":10, "y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x:10, y:20}

// 2) When we declare a variable on 1 line and initialize it on another.
let aVar: string;
aVar = "hello world";

const words = ["red", "blue", "green"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  foundWord = false;
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) variables whose type cannot be inferred correctly
let number = [-10, -1, 12];

let numberAboveToZero: number | boolean = false;
for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveToZero = number[i];
  }
}
