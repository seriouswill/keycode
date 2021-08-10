window.addEventListener("keypress", myEventHandler);
const key = document.getElementById("key")
const which = document.getElementById("which")
const code = document.getElementById("code")

const reset = document.getElementById("reset")

function myEventHandler(event){
    console.log(event);
    key.textContent = event.key;
    document.getElementById("keytitle").textContent = "event.key"
    which.textContent = event.which;
    document.getElementById("whichtitle").textContent = "event.which"
    code.textContent = event.code;
    document.getElementById("codetitle").textContent = "event.code"
    document.getElementById("description").textContent = event.which;
}

reset.addEventListener("click", () => {
    key.textContent = "";
    document.getElementById("keytitle").textContent = ""
    which.textContent = "";
    document.getElementById("whichtitle").textContent = ""
    code.textContent = "";
    document.getElementById("codetitle").textContent = ""
    document.getElementById("description").textContent = "Press Any Key!";
} )

