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


// flat method use with array (an array having another arrays as element) and returns all in a single array 
// flat method does not modify existing array, it returns all elements in a another variabe.

const another_array = [1,2,3,4,[5,6,7],8,9,[10,[11,12]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
console.log(another_array);


// isArray() method checks wheather a given value is array or not
const data = "Keshavapuram";
console.log(Array.isArray(data));

// .from() method takes a value and convert it into a array, does not modify original array

const createArray = Array.from(data);
console.log(createArray);
console.log(data);


// .of() takes set of elements and rerurn a single array
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));

