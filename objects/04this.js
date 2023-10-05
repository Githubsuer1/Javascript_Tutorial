// In javascript, this keyword reffers to current context.


const user = {
    name:"Namaste Javascript",
    price:999,
    welcomeMessage:function(){
        console.log(`Hello and welcome to the ${this.name}`);
        console.log(this);            // here this keyword reffers to the current context.
    }
}
// user.welcomeMessage();          
// user.name = "Namaste React";
// user.welcomeMessage()           
// console.log(this);  // because we are working on node not browser, that's why it shows empty object in global context.

function context(){
    console.log(this)
}
// context()       

// const coffee = function(){
//     console.log(this);
// }
// coffee();

const coffee = () =>{
    console.log(this);
}
coffee()


