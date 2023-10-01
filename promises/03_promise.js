// Exp3 we can pass some data into resolve and can consumed 

new Promise(function(resolve,reject){
    //doing async task
    setTimeout(function(){
        console.log("Task is completed.");
        let data = {name:"Mohit",age:22,location:"Varanasi"};
        resolve(data);      
    },1000);
})
.then(function(user){
    console.log("Promise is resolved");
    console.log(user);     //directly connected with .then() and resolve 
})
