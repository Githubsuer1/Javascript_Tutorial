const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){

        const error = false;
        if(!error){
            console.log("Task is completed.");
            const data = {empName:"Deepak",designation:"SDE",salary:100000};
            resolve(data);
        }
        else{
            reject("Error: something went wrong!");
        }
    },1000);
})

// here we are consuming promis by async and await
// here try and catch block gracefuly handles the error.

async function consumePromise(){
    try{
        const responce = await promise5;
        console.log(responce);
    }
    catch(error){
        console.log(error);
    }
}

consumePromise();