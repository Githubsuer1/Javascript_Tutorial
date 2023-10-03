// Selecting elements by id and queryselector 

let btnon = document.getElementById("btnon");
let body = document.getElementById("body");
let box1 = document.querySelector(".box1");
let container = document.querySelector(".container");

// temp variable flag
let flag = 1;


// adding eventlistener to the button
btnon.addEventListener("click", function(){
    if (flag == 1){
        body.style.backgroundColor = "white";
        btnon.textContent = "Off";
        btnon.style.backgroundColor = "red";
        box1.style.backgroundColor = "orange";
        container.style.backgroundColor = "white"
        flag = 0;
    }
    else{
        body.style.backgroundColor = "#212121";
        btnon.textContent = "On";
        btnon.style.backgroundColor = "greenyellow";
        box1.style.backgroundColor = "rgb(35, 33, 33)";
        container.style.backgroundColor = "rgb(41, 39, 39)"
        flag = 1
    }
})