const brands = ["Lama", "Zeen", "Sapphire", "Khaadi", "One"];

console.log("\nFor Loop");
// For Loop
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

console.log("\nHalf Pyramid");
const asterisk = ["*", "*", "*", "*", "*"];
// In JS you can write many values in expression 1 seperated by comma
for (let i = 0, len = asterisk.length, text = ""; i < len; i++) {
  text += asterisk[i] + " ";
  console.log(text);
}

// you can also omit expression 1
console.log("\nHalf Pyramid after omitting expression 1");
let i = 0;
let len = asterisk.length;
let text = "";
for (; i < len; i++) {
  text += asterisk[i] + " ";
  console.log(text);
}

//Expression 3 can also be omitted
console.log("\nHalf Pyramid after omitting expression 3");
let j = 0;
let leng = asterisk.length;
let textt = "";
for (; j < leng; ) {
  textt += asterisk[j] + " ";
  console.log(textt);
  j++;
}
