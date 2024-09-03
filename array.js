// an array of cars
const cars = ["BMW", "Toyota", "KIA"];

// more ways of creating array
const car = [];
car[0] = "Tesla";
car[1] = "Honda";
car[2] = "Audi";

const carr = new Array("Volvo", "Saab");
// the new keyword can produce some unexpected results

// accessing array elements
let Car_name = cars[0];
// this returns BMW

// accesing the last array element
let last = cars[cars.length - 1];
// this returns KIA

// changing an array element
cars[0] = "Nissan";
// changes BMW to Nissan

// length property
var cars_length = cars.length;

console.log("Car length", cars_length);

// a function consisting of a for loop to display all the elements of an array
function display(array, len) {
  console.log("\n");
  for (i = 0; i < len; i++) {
    console.log(array[i]);
  }
}

// object creation
const person = {};

// adding properties
person.firstname = "Momna";
person.lastname = "Javed";
person.car = "Honda";

// array elements can be objects, functions and an array
const myArr = [];
myArr[0] = cars;
myArr[1] = display;
myArr[2] = person;

let arr_len = myArr.length;
display(myArr, arr_len);

// adding array element
cars.push("Ferrari");

// another way to add element
cars[cars.length] = "Lambo";
// however creating elements with high indexes can create
// undefined "holes" in an array.

// an array with one element
const num = [40];

// creates an array with 40 undefined elements
const nums = new Array(40);

display(cars, cars.length);

// recognize an array

let type = typeof cars;
console.log(type);
// The typeof operator returns object because a JavaScript array is an object

// Nested Arrays and Objects
const Obj = {
  name: "Momna",
  age: 20,
  carsss: [
    { name: "Civic", models: [2019, 2020] },
    { name: "Sportage", models: [2024, 2020] },
    { name: "Alto", models: [2020, 2022] },
  ],
};

// to access arrays inside arrays, use a for-in loop for each array
for (let i in Obj.carsss) {
  console.log(Obj.carsss[i].name);
  for (let j in Obj.carsss[i].models) {
    console.log(Obj.carsss[i].models[j]);
  }
}

function displayy(value) {
  console.log("\n", value, "\n");
}
