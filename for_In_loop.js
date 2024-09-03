const person = { fname: "Momna ", lname: "Javed ", age: 21 };

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);
