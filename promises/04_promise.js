// We use catch() method to handle errors in promises
// Exp4

new Promise(function(resolve,reject){
    //doing async task
    setTimeout(function(){

        const error = true;
        if(!error){
            console.log("Task is completed.");
            let data = {name:"Mohit",age:22,location:"Varanasi"};
            resolve(data); 
        }
        else{
            reject("Error: Something went wrong!");
        }
             
    },1000);
})
.then(function(user){
    console.log("Promise is resolved");
    console.log(user);     //directly connected with .then() and resolve 
})
.catch(function(error){
    console.log("Promise is rejected");
    console.log(error);     //handels error if rejected
})
.finally(function(){
    console.log("I am always exicute wheather promise resolve or reject dosent matter.");
})