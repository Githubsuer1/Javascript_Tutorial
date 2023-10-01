// objects in javascript are used to store data in key value pair.
// It can be created using literal and constructer
// Behind the scene, keys are stored in form of strings, 

// creating obj by literal

const obj1 = {
    name:"Rohit",
    age:23,
    address:"varanasi",
    email:"rohit@chatgpt.com"
}

// accessing obj

console.log(obj1);
console.log(obj1.name);
console.log(obj1["name"]);

// using symbol as a key in object, first we have to define symbol then we can use it in objects.

const full_name = Symbol("key1");
const obj2 = {
    name:"Rohit",
    [full_name]:"Rohit singh",
    age:23,
    address:"varanasi",
    email:"rohit@chatgpt.com"
}
console.log(obj2[full_name]);


// we can override the existing value using assignment operator

obj2.address = "Pandeypur";
console.log(obj2["address"]);

// we can also freeze objects to avoid unwanted changes in our data

Object.freeze(obj2);
obj2.name = "Pahalwan";
console.log(obj2);



// we also can use a function as a value in objects

const obj3 = {
    name:"raj",
    age:24,
    location:"mumbai",
    greeting: function(){
        console.log("hello raj, how are you?");
    },

    // string interpolation
    greetingOne : function(){
        console.log(`Hello user ${this.name}`)
    }
}
console.log(obj3.greeting());
console.log(obj3.greetingOne());




