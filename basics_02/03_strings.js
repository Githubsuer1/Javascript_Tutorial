// strings are object in javascript
// we can write it using single or double qoats.
// we can declare it using two ways, literal and new keyword

// using literal 

// Exp1
const name = "SatyaPrakash";
const age = 58;
console.log(`name is ${name} and age is ${age}`)        // Expected output:- name is SatyaPrakash and age is 58


//using new keyword

//exp 2
const courseName = new String("     MCA    ");
const cost = new String(1999);
console.log(`coursName is ${courseName} and cost is ${cost}`);    // Expected output:- coursName is MCA and cost is 1999
console.log(courseName.__proto__)       // Expected output:- {} but actualy it is not empty



// strings methods to work on strings.

console.log(courseName.toLowerCase())          // Expected output:-mca
console.log(courseName.trim());                // Expected output:- 'MCA'  

console.log(courseName.slice(0,3));            // Expected output:- returns a slice of strin, does not modify original string
console.log(courseName.slice(-8,3));           // Expected output:-"     ",   returns the value from back

const channelName = "code-with-harry-.-com";
console.log(channelName.split("-"));           // Expected output:- returns an array of comma saparated value




