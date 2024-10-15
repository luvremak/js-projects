//program that converts temperatures between Celsius and Fahrenheit.
let celsius = 1;
if ( typeof celsius == 'number') {
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit);
} else {
    console.log('enter a valid value')
}