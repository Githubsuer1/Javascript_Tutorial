// selecting input area by id method
let inputText = document.getElementById("input1");

// selecting button to add by id method
let btnAdd = document.getElementById("btn1");

//  adding eventListener to the button 
btnAdd.addEventListener('click',function(){

    // if user press add button without giving task
    if(inputText.value === ""){
        alert("Please Enter Task.")
    }

    // if user press add button after giving task
    else{

        // creating new element that will go to contain list items
        let newElement = document.createElement("ul");

        // containing the content with btns
        newElement.innerHTML = `${inputText.value} <button id="btn2" class="btnRem">Remove</button>`;

        // the container that will contain newly created element
        let listContainer = document.querySelector(".listContainer");

        // appending child element created above
        listContainer.appendChild(newElement);

        //making input box empty again
        inputText.value="";

        //selecting remove btn by query selector
        let remBtn = newElement.querySelector(".btnRem");

        // adding event listener
        remBtn.addEventListener('click',function(){

            newElement.remove();   // removing task by remove method

        })
    }
})