
//Assignment - 11


//example of variable hoisting
console.log(a); // Output: undefined
var a = 23;
/*Here, only the variable declaration part is hoisted not the initialization.
This is why here we are getting undefined as an output.*/


// example of function hoisting
fun(); // Output: "hello from fun!"
function fun() {
    console.log("hello from fun!");
}
/*Here, both the function name and its implementation are 
hoisted to the top of their containing scope. This allows us  to call
the function before it is declared in the code.*/


// Function Declaration 
funDeclaration(); // Output: This is from funDeclaration!
function funDeclaration() {
    console.log("This is from funDeclaration!");
}
/*In Funciton Declaration, both the function name and its implementation are 
hoisted to the top of their containing scope.*/

// FunctionExpression 
FunctionExpression(); // TypeError: FunctionExpression is not a function
var FunctionExpression = function() {
    console.log("This is from FunctionExpression!");
};
/*In function expression, only the variable declaration part is hoisted not the implementation.
This is why here we are getting typeError.*/


console.log(i); // Output: undefined
var i = 11;

console.log(j); // ReferenceError: Cannot access 'j' before initialization
let j = 17;

console.log(k); // ReferenceError: Cannot access 'k' before initialization
const k = 57;

/* Until the lexical declaration, let and const variables are in their temporal dead zone.
 This is why accessing let and const variables before their declaration will result in a reference error.
 On the other hand, var variables are not subject to temporal dead zone restrictions.
 */
