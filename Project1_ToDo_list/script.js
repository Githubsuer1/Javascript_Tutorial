let inputText = document.getElementById("input1");
let btnAdd = document.querySelector(".btnAdd");

btnAdd.addEventListener("click",function(){
    if(inputText.value === ""){
        alert("Please Enter Task.")
    }
    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${inputText.value} <button class="btnRem">Remove</button>`;
        let listContainer = document.querySelector(".listContainer");
        listContainer.append(newElement);
        inputText.value="";
    }
})