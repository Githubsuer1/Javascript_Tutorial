// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

// 1:- Synchronus Single threded task
setTimeout(function(){
    console.log("hello user!");
},5000);


// 2:- 

function x(){

}

x(function y(){

})

// y is callback function