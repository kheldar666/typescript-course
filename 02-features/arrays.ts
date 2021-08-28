const carMarkers = ["Ford", "Toyota", "Chevy"]; // Using inference

const dates = [new Date(), new Date()];

const carsByMake = [["F150"], ["Corolla"], ["Camaro"]]; // const carsByMake:string[][] = []

// Help with Inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

carMarkers.map((car) => {
  return car.toLowerCase();
});

//Flexible Types
const importantDates: (Date | string)[] = [];

importantDates.push(new Date());
importantDates.push("2020-10-10");
