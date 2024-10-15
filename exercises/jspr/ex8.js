// Given an array of numbers, write a program that returns a new array with all numbers squared using the map method.
let arr1 = [1, 2, 3, 4, 5];

function to2(n) {
    return n *= n;
}

let squared = arr1.map(to2);

console.log(squared);
// Create an array of objects representing people with name and age properties. Write a function that filters the array to include only people over the age of 18.
let arr2 = [
    { name: 'Maria', age: 7,}, 
    { name: 'Vadym', age: 22,}, 
    { name: 'Iryna', age: 19,}
]

function filter(obj) {
    return obj.age >= 18;
}

let over18 = arr2.filter(filter);

console.log(over18);

// Use the reduce method to calculate the total price of items in a shopping cart (array of objects with name, price, and quantity).
let shoppingCart = [
    {name: 'apple', price: 3.40, quantity: 2},
    {name: 'mustard', price: 13.90, quantity: 1},
    {name: 'cherry cola', price: 14.80, quantity: 3}
]

function countBill(sum, obj) {
    return sum + (obj.price * obj.quantity); 
}

let bill = (shoppingCart.reduce(countBill, 0)).toFixed(2);

console.log(bill);