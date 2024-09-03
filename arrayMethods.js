const cars = ["BMW", "Toyota", "KIA"];
const car = ["Tesla", "Honda", "Audi"];

function displayy(value) {
  console.log(value);
}

function display(array, len) {
  for (i = 0; i < len; i++) {
    console.log(array[i]);
  }
}

// Array Methods

// toString converts an array to a string of array values
const cars_string = cars.toString();
console.log("\ntoString()");
displayy(cars_string);

// at gets the element at the given index
const getcar = cars.at(2);
console.log("\nat()");
displayy(getcar);

// join method joins all the array elements to a string
const join_cars = cars.join(" * ");
console.log("\njoin()");
displayy(join_cars);

// pop method removes the last element from the array
const popped_out_car = cars.pop();
console.log("\npop()");
console.log("popped element: ", popped_out_car);
display(cars, cars.length);

// push adds a new element to an array at the end
cars.push("Lambo");
console.log("\npush()");
display(cars, cars.length);

// shift method removes the first element and shifts all the other elements to a lower index.
let shifted_out = cars.shift();
console.log("\nshift()");
console.log("Shifted element: ", shifted_out);
display(cars, cars.length);

// unshift add new element to an array at the top and unshifts all the other elements
cars.unshift("Nissan");
console.log("\nunshift()");
display(cars, cars.length);

//warning! delete leaves undefined holes in array
// delete cars[0];
// do not use this.

// concat method creates a new array by merging existing arrays
const all_cars = cars.concat(car);
console.log("\nconcat() used to merge arrays");
display(all_cars, all_cars.length);

// copyWithin method copies array elements to another position in an array
console.log("\nBefore copyWithin() ");
display(cars, cars.length);
console.log("\nAfter copyWithin()");
cars.copyWithin(1, 0, 2);
display(cars, cars.length);
console.log("\ncar element at index 2: ", cars[2]);

const twoD_array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const OneD_array = twoD_array.flat();
console.log("\n flat() used to convert 2D array into 1D ");
display(OneD_array, OneD_array.length);

// Flatmap first maps all the elements of an array then create a new array by flattening the array
const flatMapArray = twoD_array.flatMap((x) => x);
console.log("\n flatMap() used to convert 2D array into 1D ");
display(flatMapArray, flatMapArray.length);

// splice method can be used to add new items to an array
console.log("\nBefore splice: ");
display(cars, cars.length);
cars.splice(3, 2, "Sonata", "Camry");
console.log("\nAfter splice: ");
display(cars, cars.length);

// splice can also be used to remove elements from an array without creating holes in it
cars.splice(0, 2);
console.log("\nsplice used to remove elements");
display(cars, cars.length);

// toSpliced is same as splice the difference is only that it does not alter the original array instead creates a new one
const spliced = cars.toSpliced(0, 1);
console.log("\ntoSpliced()");
display(spliced, spliced.length);

// slice method slices out a piece of array into a new array
const slicee = cars.slice(0, 2);
console.log("\nslice() ");
displayy(slicee);
