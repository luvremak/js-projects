//program that swaps the values of two variables without using a third variable.
//solution: destructuring assignment

let string = 'text'; 
let number = 5;

console.log(string + number);

[string, number] = [number, string];

console.log(string + number);