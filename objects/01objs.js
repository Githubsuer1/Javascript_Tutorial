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

// using symbol as a key in object

const full_name = Symbol("key1");
const obj2 = {
    name:"Rohit",
    [full_name]:"Rohit singh",
    age:23,
    address:"varanasi",
    email:"rohit@chatgpt.com"
}

console.log(obj2[full_name]);