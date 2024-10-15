// a function that takes a number as input and returns whether it's even or odd
let number = 3;

function evenOrOdd(num) {
    num % 2 === 0 ? console.log('the number is even') : console.log('the number is odd');
}

evenOrOdd(number);

// a function that calculates the area of a rectangle given its width and height
let width = 2, height = 3;

function calculate(w, h) {
    let S = w * h;
    console.log(S);
}

calculate(width, height);


// a function that takes an array of numbers and returns the largest number.
let arr = [1, 8, 4, 7, 5, 6, 3, 2];

function large(array) {
    let sortedArr = array.sort();
    console.log(sortedArr[sortedArr.length - 1])
}

large(arr)
