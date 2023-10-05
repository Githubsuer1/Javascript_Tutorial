// The ablity to be used function as value is known as first class functions.
// They can be passed as an argument and can be returned from the function.

// 1:- Assigning a function to a variable.

const firstClassFunction = () => {
console.log("I am a anonymos function assigned to the variable firstClassFunction.")
};
firstClassFunction();        // I am a anonymos function assigned to the variable firstClassFunction.

// 2:- passing a function as an argument

function sayHello(){
    console.log("Hello and good morning everyone. How are you all?");
}

function anotherFunction(parameter1){
    console.log(parameter1());              // sayHello() function is passed as argument in anotherFunction.
}
anotherFunction(sayHello);               // Expected output:- Hello and good morning everyone. Undefined


// 3:- Returning a function from another function.

function returnFunction(){
    return () => {
        console.log("I am a function returned from this function.")
    }
}
console.log(returnFunction());          // returning an anonymos function.


