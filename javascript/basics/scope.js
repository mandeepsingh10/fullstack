//Js has 3 types of scope:

//Block scope - let and const (variables declared within curly braces can only be accessed within those curly braces)

if (true) {
    let blockScopeVar = 'Block Scope';
    console.log(blockScopeVar);
}
//console.log(blockScope); //will give error

//Function scope - var (variables declared within function can only be accessed within that function)

function scope() {
    const functionScopeVar = 'Function Scope';
    console.log(functionScopeVar);
}
scope();
//console.log(functionScope); //will give error

//Global scope - var (variables declared outside of any function can be accessed anywhere in the code)

const globalScopeVar = 'Global Scope';
console.log(globalScopeVar);

function globalscope() {
    const globalScopeVar = 'Global Scope inside function';
    console.log(globalScopeVar);
}
globalscope();