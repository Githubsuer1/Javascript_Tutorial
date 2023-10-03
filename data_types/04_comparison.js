// same data type comparison

console.log( 2 > 1)         // Expected output:- True
console.log(2 < 1)          // Expected output:- False
console.log(2 >= 1)         // Expected output:- True
console.log( 2 == 1)        // Expected output:- False
console.log(2!=1)           // Expected output:- True


// different data type  comparison

console.log("2">1)          // Expected output:- True
console.log("02">1)         // Expected output:- True



// comparison and equaluty check works differently, comparison converts null to a num and treated it as 0.
// where equality check does not converts, that's why first is False and third is True


console.log(null > 0)           // Expected output:- False
console.log(null == 0)          // Expected output:- false
console.log(null >= 0)          // Expected output:- True

console.log(undefined < 0)          // Expected output:- False
console.log(undefined > 0)          // Expected output:- False
console.log(undefined == 0)         // Expected output:- False

// strict chekcing

console.log("2" === 2)              // Expected output:- False


