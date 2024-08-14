let inputUserName = document.getElementById("name");
let inputUserPassword = document.getElementById("password");
let changeEye = document.getElementById("close")
let messageErropassword = null;
let form = document.querySelector("form")

const boutonValidation = document.querySelector(".bouton");

function nameinput(){
     
    boutonValidation.addEventListener("click", (e)=>{
    let inputvalue = inputUserName.value;

        if (inputvalue === ""){
            e.preventDefault();
            inputUserName.classList.add("heartbeat")
            let messageErrorName = document.createElement("p");
            let form = document.querySelector("form");
            messageErrorName.classList.add("errorStyle");
            messageErrorName.textContent = "veuillez entrez votre nom";
           form.appendChild(messageErrorName);
        }
        
    })
}


function passInput(){
    boutonValidation.addEventListener("click", (e)=>{
    let passwordValue = inputUserPassword.value
        if (passwordValue === ""){
            e.preventDefault()
            inputUserPassword.classList.add("heartbeat")
            messageErropassword = document.createElement("p")
            messageErropassword.classList.add("errorpassword")
            messageErropassword.textContent = "veuillez insérer votre mot de passe";
            form.appendChild(messageErropassword)
            
            
            
        }else if(passwordValue.length < 10){
            e.preventDefault();
            inputUserPassword.classList.add("heartbeat");
            messageErropassword = document.createElement("p");
            messageErropassword.classList.add("errorpassword");
            messageErropassword.textContent = "votre mot de passe doit contenir au moins 10 caractères";
            form.appendChild(messageErropassword);
            
        }
    })
}

function showPassword(){
    changeEye.addEventListener("click", (e)=>{
       if (inputUserPassword.type === "password"){
        changeEye.src = "/assets/openEye.png"
        inputUserPassword.type = "text"
       }else{
        inputUserPassword.type = "password"
        changeEye.src = "/assets/closeEye.png"
       }
        
    })
}

function allform(){
    nameinput()
    passInput()
    showPassword()
}
allform()