// a program that prints the first 10 numbers of the Fibonacci sequence

let n = 10, n1 = 0, n2 = 1, nextNum;

for (i = 1; i <= n; i++) {
    console.log(n1);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}

// a program that reverses a given string using a for loop

let string = 'string', reversed = '';

for (let index = string.length - 1; index >= 0; index--) {
    reversed += string[index];
}

console.log(reversed);

// a program that finds the factorial of a number using a while loop.
let number = 5, factorial = 1, m = 1;

while (m <= number) {
    factorial *= m;
    m++
}

console.log(factorial)