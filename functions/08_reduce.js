// takes multiple values and return them in a single unit.
// reduce method takes two arguments, one is function and other is initial value.
// callback function takes two param, first is accumulater that stores the results and another is current value.

// 1:- find the max value in array

const array1 = [5,1,3,2,6]
const output = array1.reduce(function(max,current){
    if(current>max){
        max = current;
    }
    return max;
},0)

console.log(output);         // Expected output:- 6


// 2:- find the sum of all elements of the given array

const array2 = [1,2,3,4,5,6,7,8,9,10]

const sum = array2.reduce(function(sum,current){
    sum = sum + current;
    return sum;
},0);

console.log(sum);       // Expected output:- 55