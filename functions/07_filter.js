// filter function is used to filter the value in an array

const array1 = [5,1,3,2,6]

// 1:- find out the odd nums in given array elements
const oddNum = array1.filter(function(i){
    return i%2
})

console.log(oddNum)         // Expected output:- [5,1,3]


// 2:- find out the even nums in given array elements
const evenNum = array1.filter(function(i){
    return i%2==0;
})

console.log(evenNum);         // Expected output:- [2,6]