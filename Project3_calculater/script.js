const inputText = document.getElementById('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.textContent === '=')
        {
            alert('Please Enter valid inputs.')
        }
        else if(e.target.textContent === 'Clear'){

            inputText.value = "";
        }
        else{
            
        }
    })
})