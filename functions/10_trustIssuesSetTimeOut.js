// set time out has some trust issues with it, it is not sure that code will execute after certian amount of time specified.
// it will execute only when call stack is empty because it waits in callback queue to get execute.


console.log("start");


setTimeout(function mtq() {
    console.log("I will execute in last.");
}, 5000);

console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}
console.log("while expires");

