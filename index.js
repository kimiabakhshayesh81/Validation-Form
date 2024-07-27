let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')

let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')



function usernameValidation (){
    if(usernameInput.value.length < 12){
        usernameMessage.style.color = 'red'
        usernameMessage.innerHTML = 'Must Contain 12 Character (Min)'
        usernameMessage.style.display = 'block'
    }
    else{
        usernameMessage.style.color = 'green'
        usernameMessage.innerHTML = 'correct'
    }
}

function passwordValidiation(){
    if(passwordInput.value.length < 8){
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Must Contain 8 Character (Min)'
        passwordMessage.style.display = 'block'
    }
    else{
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'correct'
    }
}






