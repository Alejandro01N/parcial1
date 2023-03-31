const correo = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const parrafoColegio = document.getElementById("warningsColegio");

form.addEventListener("submit", e=>{

    let warnings = "";
    let entrar = false;
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    parrafo.innerHTML="";

    if(!validEmail.test(correo.value)){
        warnings += `El Email no es valido <br>`
        entrar = true;
    }

    if(password.value.length < 8){
        warnings += `La contraseña es muy corta <br>`
        entrar = true;
    }

    if(entrar){
        e.preventDefault()
        parrafo.innerHTML = warnings;
    }

})


