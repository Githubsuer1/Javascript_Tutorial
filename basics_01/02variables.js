// variables are named location in memory to store the data 
// there are three keywords to create variables in javascript


// variable with var keyword have global scope, you can access it anywhere.
// this varible can be redeclaired, initilized afrer declaration and also hoisited.
var a = 10;
console.log(a);


// variables with let key word have block scope, they are accessible only within block
// can't be redeclaired, can initilized after declaration, but not hoisted because of temporal dead zone
let b = 108;
console.log(b);


// same as let variable, only difference that it should be initialized during declaration.
// can't be redeclaired, can't initilized after declaration, but not hoisted because of temporal dead zone
const c = 1000;
console.log(c);


// possible
var num1 = 1000;
num1 = 1200;
console.log(num1);


// possible
let num2 = 3201;
num2 = 2130;
console.log(num2);


// not possible
const num3 = 1254;
num3 = 410;
console.log(num3);


var name1 = "John";
let name2 = "Rohan";
const name3 = "Shina";
console.log(name1);
console.log(name2);
console.log(name3);
{
    // all will be print on console because of laxical environment
    console.log(name1);
    console.log(name2);
    console.log(name3);
}


{
var name1 = "John";
let name2 = "Rohan";
const name3 = "Shina";
    console.log(name1);
    console.log(name2);
    console.log(name3);
}
console.log(name1); //only this will be printed because it has global scope
console.log(name2); //error because it has only block scope
console.log(name3); //error because it has only block scope


var varOne = 12;
let varTwo = 13;
const varThree = 14;
{
    var varOne = 56;    // it will be changed here because of global scope, it is called shadowing
    let varTwo = 70;    // will not be changed, it has own identity in this block
    const varThree = 60;// will not be changed, it has own identity in this block
    console.log(varOne);
    console.log(varTwo);
    console.log(varThree);
}
console.log(varOne);
console.log(varTwo);
console.log(varThree);

var cd = 120;
let cd = 140;   //erroe because it already declaired
console.log(cd);




