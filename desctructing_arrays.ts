// destruction

const alphabet = ["A", "B", "C", "D", "E"];
const numbers = [1, 2, 3];
const [a, , c, ...rest] = alphabet;
console.log(a, c);
console.log(rest)

const newArray = [...alphabet, ...numbers];
console.log(newArray)