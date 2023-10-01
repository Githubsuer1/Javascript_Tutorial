const marval_heros = ["IronMan","Thor","SpiderMan"]
const dc_heros = ["BatMan","Flash"]

// pushing array into another array as element 

marval_heros.push(dc_heros);
console.log(marval_heros);

// concat method concat two array and returns in a variable, does not modify original array

const all_heros = marval_heros.concat(dc_heros);
console.log(all_heros);