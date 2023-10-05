// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

setTimeout(function(){
    console.log("I will execute after 2 seconds hehe---");
},2000)

// actually the setTimeOut method has a callback that registers in Web API environment and attach a timer with it.
// when timer expires, immedeatily it comes into the callback queue, and event loop checks everytime and if 
// call stack becomes empty, event loop pushes the callback to call stack from callback queue. 


console.log("Start");

setTimeout(function mtq() {
    console.log("I will execute in last.");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/users")
.then(function cbq(){
    console.log("CB netflix");
})

console.log("End");

