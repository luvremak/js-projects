// Create an array of numbers and write a program that finds the sum and average of its elements.
let arr1 = [2, 5, 8, 3, 9, 10, 7, 5, 5], sum = 0;

arr1.forEach( element => {
    sum += element;
})

console.log(sum);

// Write a program that removes duplicates from an array.
let arr2 = [5, 5, 2, 2, 3, 3, 9, 9];
let removeDup = new Set(arr2);
console.log(removeDup);

// Implement a function that checks if a word is a palindrome (the same forwards and backwards).
let word = 'palindrome';

function check(string) {
    for (let index = string.length - 1; index >= 0; index--) {
        reversed = ''
        reversed += string[index];
    }
    
    if (string === reversed) {
        console.log('the word is a palindrome')
    } else {
        console.log('the word is not a palindrome')
    }
}

check(word);

