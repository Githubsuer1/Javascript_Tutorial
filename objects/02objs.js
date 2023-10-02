// singlton object by constructer

// const tinderUser = new object();
// console.log(tinderUser);

const tinderUser = {};
tinderUser.name = "Sammy";
tinderUser.age = 25;
tinderUser.location = "Vasai";
tinderUser.role = "Devoloper";
// console.log(tinderUser);


//objects can have nested objects into it.

const user = {
    email:"nobody@chatGpt.com",
    name:{
        fullName:{
            firstName:"Saurabh",
            lastName:"Shukla"
        }
    }
}
// accessing objects values
console.log(user);
console.log(user.name);
console.log(user.name.fullName);
console.log(user.name.fullName.firstName)

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

// contains both objs as element

const obj3 = {obj1,obj2}
console.log(obj3);   // Expected output:-   { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } 


// assign method takes two parameter, first target and second is source, if target is not given, it stroes data in first object

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4);   // Expected output:-    { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// conbine using spread operator
const obj5 = {...obj1, ...obj2};
console.log(obj5);  // Expected output:-    { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// we can access keys and values using key and value methods
console.log(Object.keys(tinderUser));        // Excepted output:- [ 'name', 'age', 'location', 'role' ]
console.log(Object.values(tinderUser));      // Excepted output:- [ 'Sammy', 25, 'Vasai', 'Devoloper' ]


//entries method returns each key value pair in the form of array
console.log(Object.entries(tinderUser));
