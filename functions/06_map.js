// These are higher order functions
// Map function is usully used to transform an array


// 1:- function to find square of ginven array elements

const array1 = [5,1,3,2,4]
const output = array1.map(function(i){
    return i*i
})

// console.log(output);        // Expected output :- [25,1,9,4,16]


// 2:- function to find out the even num from given array elements
const array2 = [1,2,3,4,5]
const evenNum = array2.map(function(i){
    return i*2;
})
console.log(evenNum);
