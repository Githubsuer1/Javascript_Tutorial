//      Exp2    

//      promise creation
const promise2 = new Promise(function(resolve,reject){
    //doing async task
    setTimeout(function(){
        console.log("Task is completed.");
        resolve();      
    },1000);
})

//promise consumed
promise2.then(function(){
    console.log("promise is resolved");     //directly connected with .then() and resolve 
})
