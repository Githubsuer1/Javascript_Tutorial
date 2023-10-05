// A function that returns a function or takes other functions as arguments is called a higher-order function.

const redius = [1,2,3,4]


// normal function
const area = function(redius){
    return Math.PI * redius * redius;
}


// another normal function
const circumfarance = function(redius){
    return 2 * Math.PI * redius;
}


// This function is going to be a highr order functin as he is taking a function as argument.

const calculate = function(redius,logic){
    output = []
    for(let i = 0;i<redius.length;i++){

        let temp = logic(redius[i]);
        output.push(temp);                      // here area is using as parameter that is
    }
    return  output;
}


console.log(calculate(redius,area));            // function calling by passing another function area to calculate area
console.log(calculate(redius,circumfarance));   // function calling by passing another function area to calculate circumfarances