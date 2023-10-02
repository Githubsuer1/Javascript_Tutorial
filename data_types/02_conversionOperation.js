let age = 33;
console.log(typeof(age));       // Expected output :- Number
console.log(age)                // Expected output :- 33


let age2 = "33";
console.log(typeof(age2))       // Expected output :- String
console.log(age2)               // Expected output :- '33'

//after converting string  into Number.
let valueInNumber = Number(age2)
console.log(typeof(valueInNumber));     // Expected output :- Number
console.log(valueInNumber);             // Expected output :- 33



let age3 = "33abc"
console.log(typeof(age3));      //Expected output  :- String
console.log(age3);              // Expected output :- '33abc'

// After converting string into number 
let valueInNumber2 = Number(age3)
console.log(typeof(valueInNumber2));     // Expected output :- Number
console.log(valueInNumber2);             // Expected output :- NaN



let score = undefined                   
console.log(typeof(score));              // Expected output :- undefined
console.log(score);                     // Expected output :- undefined


// after converting undefined into number
let valueInNumber3 = Number(score)
console.log(typeof(valueInNumber3));              // Expected output :- undefined
console.log(valueInNumber3);                     // Expected output :- NaN


let score3 = true
console.log(typeof(score3))                 // Expected output :- boolean
console.log(score3)                         // Expected output :- true


// after converting boolean into number
let valueInNumber4 = Number(score3)
console.log(typeof(valueInNumber4))         //Expected output :- number
console.log(valueInNumber4)                 //Expected output :- 1


//num to string 
let someNum = 33
let valueInString = String(someNum)
console.log(typeof valueInString)           // Expected output :- string
console.log(valueInString)                  // Expected output :- 33



// string to num :-             "33"        => 33
// string to num :-             "33abc"     =>NaN
// boolean to num:-             true        => 1,   false   => 0
// empty string to boolean:-    "" => false
// string to boolean :-         "string" => true
// num to string :-             33 => '33'




