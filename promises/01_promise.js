// promices are objects that represents the eventual complition or failure of an operation.
// promise has three states, pending,resolve and reject
// new keyword used with Promise to create a promise



//      Exp1    not resolved


//      promise creation
const promise1 = new Promise(function(resolve,reject){
    //doing async task
    setTimeout(function(){
        console.log("Task is completed.");
    },1000);
})

//promise consumed
promise1.then(function(){
    console.log("promise is resolved");     //not resolve 
})
