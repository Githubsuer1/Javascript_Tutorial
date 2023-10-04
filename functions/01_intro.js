// In JavaScript, a function statement declares a function.It loads before any code is executed. allow hoisting.
// function are the named block of code that works when it is invoked. it is declared using fuction keyword.


// 1:- function statement.

function functionJavascript(){
    console.log("This is my first code of function.");
}
functionJavascript();


//function with parameter  

function secondFunction(num1,num2){
    sum = num1 + num2;
    return sum;
}
console.log(secondFunction(10,12));     // Expected output:- 22


// 2: Function Expression.
// A function expression associates a value with a variable, just like any other statement. Does not allow hoisting.

const func = function(){
    console.log("hello programmer!");
}
func();     // Expected output:- hello programmer.


// 3:- Named function Expression.
// Named function expression means function with the name.

const test = function testOfNamedExpression(){
    console.log("I am a named function expression");
}
test();         // Expected output:- I am a named function expression


// 4:- Anonymos function
// Anonymos function can defined as a function without name. It does not have its own identity.
// it is used when we want to use function as value.

const anonymosFunction = function(){
    console.log("anonymos function is called.")
}
anonymosFunction();        // Expected output:- anonymos function is called.


// Importents
//1:- function parameters are passed durung function declaration and function arguments are used when function is invoked.


