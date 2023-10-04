// function in javascript like very beautiful. we can do any operation with the help of function.
// function are the named block of code that works when it is invoked.
// fuction can be created using fuction keyword.


//function withour parameter, also called function statement.
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


// function expression, it associates some value with it.
// and it can be called and exicuted.

const func = function xyz(){
    console.log("hello programmer!");
}
func();     // Expected output:- hello programmer.

// function statement is hoisted and invoced but function expression can't, 
//because function expression stores function in a variable and variable can't be called.


// function declaration :- same as function statement nothing different