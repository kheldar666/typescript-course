//Primitive Types
var apples = 5; // That's a type annotation
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// Built in Objects
var now = new Date();
// Array
var colors = ["red", "green", "blue"];
var myNumbers = [1, 2, 2, 4, 5];
var truths = [true, false, false, true];
//Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//Object literal
var point = {
    x: 10,
    y: 20
};
// Function
var logNumber = function (i) {
    console.log(i);
    return true;
};
