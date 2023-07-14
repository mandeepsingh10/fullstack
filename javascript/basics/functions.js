// Functions

function greet(user) {
    console.log("Hello "+user+"!");
}

greet('Mandeep Singh');

//Function to add two numbers and return the sum'

function add(a,b) {
    return a+b;
}

const sum = add(2,3);
console.log(sum);

//arrow function

const arrowAdd = (c,d) => {
    return c+d;
}

const total = arrowAdd(20,31);
console.log(total);

//Another way to write arrow function

const arrowAdd2 = (e,f) => e+f;
const total2 = arrowAdd2(20,31);
console.log(total2);