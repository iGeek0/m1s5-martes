console.log("Console log desde otro.js");

let carName = "Volvo";
let driver = "Juan";
let x = 50;
let a = "5";
let b = "10";

let suma = Number(a) + Number(b);

let concatenacion = carName + driver;

// console.log("La suma es:", suma);

// console.log("La concatenacion es:", concatenacion);

// "El conductor Juan tiene un Volvo"
let concatenacion2 = "El conductor"+ " " + driver + " "+"tiene un " + carName;

// console.log(concatenacion2);

// String template en javascript
let optimizacionConcatenacion = `El conductor ${driver} tiene un ${carName}`;

console.log(optimizacionConcatenacion)




