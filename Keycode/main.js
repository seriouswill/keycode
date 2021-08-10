window.addEventListener("keypress", myEventHandler);
const key = document.getElementById("key")
const which = document.getElementById("which")
const code = document.getElementById("code")

function myEventHandler(event){
    console.log(event);
    key.textContent = event.key;
    which.textContent = event.which;
    code.textContent = event.code;
}



