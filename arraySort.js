function display(array, len) {
  for (i = 0; i < len; i++) {
    console.log(array[i]);
  }
}

const names = ["Momna", "Junaid", "Zarnab", "Amna", "Amal", "Aneela"];

// sort
names.sort();
console.log("\nSorted Array using sort()");
display(names, names.length);

// reversing an array
names.reverse();
console.log("\nReversing an array using reverse()");
display(names, names.length);

// toSorted method is a safe way to sort an array without altering the original array
const tosorted = names.toSorted();
console.log("\nSorted Array using toSorted()");
display(tosorted, tosorted.length);

// toReversed method is a safe way to reverse an array without changing the original array
const toreversed = tosorted.toReversed();
console.log("\nReversed Array using toReversed()");
display(toreversed, toreversed.length);

// Numeric Sort
const numbers = [10, 2, 3, 4, 12, 45, 24, 98];
numbers.sort(function (a, b) {
  return a - b;
});
console.log("\nNumber sorting");
display(numbers, numbers.length);

// in descending order
const number = [10, 2, 3, 4, 12, 45, 24, 98];
number.sort(function (a, b) {
  return b - a;
});
console.log("\nNumber sorting in descending order");
display(number, number.length);

// sorting an array in random order
const numb = [10, 2, 3, 4, 12, 45, 24, 98];
numb.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log("\nRandom order sorting");
display(numb, numb.length);
// The numb.sort() method in the example above is not accurate. It will favor some numbers over others.

// The correct method is Fisher Yates Shuffle
for (let i = numb.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = numb[i];
  numb[i] = numb[j];
  numb[j] = k;
}
console.log("\nRandom order sorting using Fisher Yates Shuffle Method");
display(numb, numb.length);

// Math.min()
function minimum(arr) {
  return Math.min.apply(null, arr);
}

const min = minimum(numbers);
console.log("\nMinimum number in the numbers array", min);

// Math.max()
function maximum(arr) {
  return Math.max.apply(null, arr);
}

const max = maximum(numbers);
console.log("\nMaximum number in the numbers array", max);

// There is no built-in function for finding the lowest value in a JavaScript array.
// The fastest code to find the lowest number is given below

function ArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

const arr_min = ArrayMin(numbers);
console.log("\nMinimum number in the numbers array", arr_min);

function ArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

const max_array = maximum(numbers);
console.log("\nMaximum number in the numbers array", max_array);

// object sorting
const cars = [
  { name: "BMW", year: 2020 },
  { name: "Civic", year: 2022 },
  { name: "Elantra", year: 2018 },
];

cars.sort(function (a, b) {
  return a.year - b.year;
});
console.log("\nObject Sorting based on year");
display(cars, cars.length);
