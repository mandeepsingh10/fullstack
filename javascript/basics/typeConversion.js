//Type conversion

console.log(5 + '5'); // gives 55
console.log(true + '3'); // gives true3
//When we use type conversion with + the result is always a string

console.log('5' - 5); // gives 0
console.log('5' * 5); // gives 25
console.log('5' / 5); // gives 1
console.log('5' - true); // gives 4
console.log('5' - false); // gives 5
console.log('Mandeep' - 'Singh'); // gives NaN (NaN = Not a Number)
console.log(5 + undefined); // gives NaN
console.log(5 + null); // gives 5
//When we use type conversion with -, *, / the result is always a number (except NaN)

//explicit type conversion

console.log(Number('5')); // gives 5
console.log(Number(true)); // gives 1
console.log(Number('')); // gives 0
console.log(parseInt('5.5')); // gives 5
console.log(parseFloat('3.14')); // gives 3.14

console.log(String(5)); // gives '5'
console.log(String(true)); // gives 'true'
console.log(true.toString()); // gives 'true'
console.log((500).toString()); // gives '500'

console.log(Boolean(5)); // gives true (except 0, '', null, undefined)
console.log(Boolean(undefined)); // gives false, 0 '' null also gives false


