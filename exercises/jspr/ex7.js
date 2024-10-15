// Create an object to represent a car, with properties like model and year. Write a function that logs a formatted description of the car.
const car = {
    model: "Chevrolet Impala",
    year: 1967,
}
console.log(`${car.model} ${car.year}`);

// Write a program that counts the occurrences of each character in a given string and stores the counts in an object.
let string = "pretend there is something cool written here";
string = string.split('');
let characters = {};

for (char of string) {
    if (!(char in characters)) {
        characters[char] = 1;
    } else {
        characters[char]++;
    }
}

console.log(characters);