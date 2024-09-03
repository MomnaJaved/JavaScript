function display(array, len) {
  for (i = 0; i < len; i++) {
    console.log(array[i]);
  }
}

const numbers = [1, 5, 2, 6, 8, 90, 3, 4];
// forEach function
let num = " ";
numbers.forEach(for_each);

console.log("\nforEach()", num);
function for_each(value) {
  num += value + " ";
}

// the map method creates a new array by performing a function on each array element
const numb = numbers.map(func);

function func(value) {
  return value * 2;
}

console.log("\nmap()");
display(numb, numb.length);

// flatMap() method first maps all elements of an array and then creates a new array by flattening the array
const n = numbers.flatMap((x) => x * 4);
console.log("\nflatMap()");
display(n, n.length);

// filter()
const over5 = numbers.filter(myFunc);

function myFunc(value) {
  return value > 5;
}
console.log("\nfilter()");
display(over5, over5.length);

let sum = numbers.reduce((total, value) => {
  return total + value;
});

console.log("\nreduce()", sum);

// reduceRight works from right to left
let summ = numbers.reduceRight((total, value) => {
  return total + value;
});

console.log("\nreduceRight()", summ);

// every() method checks if all the elements pass a function
let test = numbers.every(lessthan100);
function lessthan100(value) {
  return value < 100;
}

console.log("\n use every() to check if every element is less than 100:", test);

// some() to check if some array values pass a test
let somee = numbers.some(lessthan5);
function lessthan5(value) {
  return value < 5;
}
console.log("\n use some() to check if some element are less than 5:", test);

// form() returns an Array object from any object with a length property or any iterable object
const arr = Array.from("MOMNA");
console.log("\n from() creates an array from a string");
display(arr, arr.length);

// keys() returns an Array Iterator object with the keys of an array
const names = ["Momna", "Khola", "Suheera"];
const keys = names.keys();
let text = "";
for (let x of keys) {
  text += x + " ";
}
console.log("\nKeys: " + text);

// entries() creates an Array Iterator, and then iterate over the key/value pairs

const entry = names.entries();
textt = " ";
for (let x of entry) {
  textt += x + "    ";
}
console.log("\nEntries:" + textt);

// with() method as a safe way to update elements in an array without altering the original array
const update_name = names.with(0, "Amna");
console.log("\nUpdate name using with()");
display(update_name, update_name.length);

// The ... operator expands an iterable (like an array) into more elements

const p1 = ["Momna", "Javed", 21];
const p2 = ["Amna", "Javed", 29];
const p3 = ["Sadia", "Javed", 60];
const p4 = ["Aneela", "Junaid", 29];

const persons = [...p1, ...p2, ...p3, ...p4];
console.log("\n... operator");
display(persons, persons.length);
