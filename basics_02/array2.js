const marval_heros = ["IronMan","Thor","SpiderMan"]
const dc_heros = ["BatMan","Flash"]

// pushing array into another array as element 

marval_heros.push(dc_heros);
console.log(marval_heros);

// concat method concat two array and returns in a variable, does not modify original array

const all_heros = marval_heros.concat(dc_heros);
console.log(all_heros);

//accessing using spread operator
//working of spread operator with two arrays is same as concatination 

const all_new_heros = [...marval_heros, ...dc_heros];
console.log(all_new_heros); 


// flat method takes array as argument and returns all in a single array 

const another_array = [1,2,3,4,[5,6,7],8,9,[10,[11,12]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);