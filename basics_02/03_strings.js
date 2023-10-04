// The String object is used to represent and manipulate a sequence of characters.
// we can write it using single or double qoats.
// we can declare it using two ways, literal and new keyword

// using literal 

// Exp1
const name = "SatyaPrakash";
const age = 58;
console.log(`name is ${name} and age is ${age}`)        // Expected output:- name is SatyaPrakash and age is 58


//using new keyword

//exp 2
const courseName = new String("  code-with-me  ");
const cost = new String(1999);
console.log(`coursName is ${courseName} and cost is ${cost}`);    // Expected output:- coursName is MCA and cost is 1999
console.log(courseName.__proto__)                                 // Expected output:- {} but actualy it is not empty



// strings methods to work on strings.

console.log(courseName.toLowerCase())          // Expected output:-mca
console.log(courseName.trim());                // Expected output:- 'MCA'  

console.log(courseName.slice(0,3));            // Expected output:- returns a slice of string, does not modify original string
console.log(courseName.slice(-8,3));           // Expected output:- "     ",   returns the value from last index

const channelName = "code-with-harry-.-com";
console.log(channelName.split("-"));           // Expected output:- returns an array of comma saparated value

// A lot of methods are here that are used with strings is that 

// String length()
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()


