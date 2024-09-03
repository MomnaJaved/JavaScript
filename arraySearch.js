const brands = ["Lama", "Sapphire", "Khaadi"];

// indexOf method searches an array of element value and returns its position
let position = brands.indexOf("Sapphire") + 1;
console.log(
  "\nPosition of Sapphire brand in array of brands using indexOf: ",
  position
);

// lastIndexOf is same as indexOf but returns the position of the last occurrence of the specified element
let pos = brands.lastIndexOf("Sapphire") + 1;
console.log(
  "\nPosition of Sapphire brand in array of brands using lastIndexOf: ",
  pos
);

// includes method allows us to check if an element is present in an array
let check = brands.includes("Lama");
console.log("\nLama is included in brands (true or false) =", check);

// find method returns the value of the first array element that passes a test function
// this examples finds the first element that is less than and equal to 29
const numbers = [78, 19, 90, 29];
let first = numbers.find(check_function);
console.log(
  "\nThe first element in an array that is less than and equal to 29: ",
  first
);
function check_function(value) {
  return value <= 29;
}

//findIndex method returns the index of the first element that passes the function.
const numb = [78, 19, 90, 49];
let ind = numb.findIndex(check_func);
console.log(
  "\nThe index of first element in an array that passes the test function: ",
  ind
);
function check_func(value) {
  return value < 30;
}

// findLast method will start from the end of an array and return the value of the first element that satisfies the condition.
let num = numbers.findLast((x) => x > 60);
console.log(
  "\nThe First Number from the end of an array that is greater than 60: ",
  num
);

// findLastIndex returns the index of the element that satisfies the condiion from the end of an array
let indexx = numbers.findLastIndex((x) => x > 60);
console.log(
  "\nThe Index of First Number from the end of an array that is greater than 60: ",
  indexx
);
