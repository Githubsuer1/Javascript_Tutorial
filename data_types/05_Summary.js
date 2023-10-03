// Premitive data types

// String, Number, Undefined, Null, Boolean, Symbol and BigInt
// These above data types are like call by value means the modification happened with there copy of values not by reference

//null type
let nullVariable = null
console.log(typeof nullVariable)        // expected output:- object


// undefined type
let undefinedVariable;
console.log(typeof undefinedVariable);  // expected output:- undefined
console.log(undefinedVariable);         // expected output:- undefined


//symbol type
let symbol = Symbol('123');
console.log(typeof symbol)          // expected output:- symbol

let symbol1 = Symbol('123');
console.log(typeof symbol);         // expected output:- symbol

console.log(symbol === symbol1)     // expected output:- false


// Non premitive (Reference)

// Array, Objects , Functions 

let array1 = ["name","age",123]

console.log(typeof array1)          // expected output:- object
console.log(array1[0])

// Object
let obj1 = {
    name:"sidd",
    age:23,
    location:"varanasi"
}

console.log(typeof obj1)            // expected output:- object
console.log(obj1)


// Function Expression
const myFunction = function xyz(){
    console.log("hello world!");
}

//  xyz();                      // expected output:- xyz() not defined because it is stored in a variable as value,

console.log(typeof myFunction)  // expected output:- function
console.log(myFunction);        // expected output:- [function : xyz]
myFunction()                    // expected output:- hello world!


// *****************************+++++++++++++++++++++++++++++++++

// premitive data types uses stack memory that gives a copy of original value


let myyoutube = "hitesh raj"
let anotherfucttion = myyoutube
anotherfucttion = "raajaji"
console.log(myyoutube);             // expected output:- hitesh raj
console.log(anotherfucttion);       // expected output:- rajaaji


// non premitive data types uses heap memory that gives the reference of original value
// any modification will be made to original value

let myObj = {
    name:"hitesh",
    age:23
}

console.log(myObj);         // Expected output:- {name:'hitesh',age:23}

let myObj2 = myObj;
myObj2.name = "siddhant"

console.log(myObj);         // Expected output:- {name:'siddhant',age:23}
console.log(myObj2);        // Expected output:- {name:'siddhant',age:23}
