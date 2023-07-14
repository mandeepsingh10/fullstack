// We have two types of equality operators in JavaScript:
// == (loose equality operator) which allows for type coercion and === (strict equality operator) which doesn not allow type coercion.

// Examples

const a = 'test';
const b = 'test';

console.log(a == b); // gives true
console.log(a === b); // gives true

// Let's see how thes two operators behave with different data types

const c = 10;
const d = '10';
console.log(c == d); // gives true 
console.log(c === d); // gives false because the types are different i.e number and string, d is not converted to a number

// It is recommended to use the strict equality operator === as it does not allow type coercion and is more predictable.

// The strict equality operator === is also faster than the loose equality operator ==.

