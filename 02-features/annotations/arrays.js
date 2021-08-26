var carMarkers = ["Ford", "Toyota", "Chevy"]; // Using inference
var dates = [new Date(), new Date()];
var carsByMake = [["F150"], ["Corolla"], ["Camaro"]]; // const carsByMake:string[][] = []
// Help with Inference when extracting values
var car = carMarkers[0];
var myCar = carMarkers.pop();
carMarkers.map(function (car) {
    return car.toLowerCase();
});
//Flexible Types
var importantDates = [];
importantDates.push(new Date());
importantDates.push("2020-10-10");
