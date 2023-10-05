// Another syntex to creating functions, thats offten better then function function expression.

// 1:- single line can be written without curly braces.

let add = (a,b) => a+b;
console.log(add(5,3));      // Excepted output is :- 8


//2 :- more then one line should be in curly braces
let printName = (name) => {
    console.log(`Hello ${ name} How are you?`);
}
printName("Siddhant Mishra");           // Excepted output is :- Hello Siddhant Mishra How are you?

// 3 :- statement in paranthese dosent need return keyword

let sum = (num1,num2)=> (num1 + num2);
console.log(sum(120,45));

// 4:- 

let objPrint = () => ({name:"siddhant"});
console.log(objPrint());