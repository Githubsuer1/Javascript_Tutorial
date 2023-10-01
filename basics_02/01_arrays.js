// 1: literal method to create array

const myArr1 = [1,2,3,4,5,"Siddhant",true];
console.log(myArr1);

// // 2: array using new keyword

const myArr2 = new Array(10,20,30,"Shivam",false);
console.log(myArr2);

// // 3: accessing elements of array by indexing

console.log(myArr1[0]);

// // 4:  accessing elements by for loop

for(let i =0;i<myArr1.length;i++){
    console.log(myArr1[i]);
}

// 5:  adding and modifing elements using index
myArr1[5] = "Ramji";
myArr1[7] = "Hitesh";
myArr1[8] = "Saurabh";
myArr1[9] = false;
console.log(myArr1);

// 6: array methods


// push method adds an element at the end of array
myArr1.push(120);
console.log(myArr1);

// // pop method removes an array element from the end of array
myArr1.pop();
console.log(myArr1);

// // unshift method adds an element on the 0th index
myArr1.unshift(8);
console.log(myArr1);

// //shift method is just opposite of unshift method that removes 0th index element
myArr1.shift()
console.log(myArr1);

// slice method gives a section of the array in given index excluding last index

console.log(myArr1);
console.log(myArr1.slice(5,7));
console.log(myArr1);

// splice method removes the indexed element

console.log(myArr1);
console.log(myArr1.splice(5,7));
console.log(myArr1);

