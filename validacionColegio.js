const nit = document.getElementById("nit");
const telefono = document.getElementById("telefono");
const cole = document.getElementById("institucion")
const direccion = document.getElementById("direccion")
const rector = document.getElementById("rector")
const email = document.getElementById("correo");
const formColegio = document.getElementById("formColegio");
const parrafoColegio = document.getElementById("warningsColegio");
const enviar = document.querySelector(".btn")

function maxLenghtNumber(obj){

    if(obj.value.length > obj.maxLength){
        obj.value = obj.value.slice(0, obj.maxLength)
    }
}

function maxLenghtTelefono(obj){

    if(obj.value.length > obj.maxLength){
        obj.value = obj.value.slice(0, obj.maxLength)
    }
}


enviar.addEventListener("click" , e=>{

    let warningsColegio = "";
    let entrarColegio = false;
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    parrafoColegio.innerHTML = "";

    if(nit.value.length < 1 || telefono.value.length < 1 ||  cole.value.length < 1 || direccion.value.length < 1 || rector.value.length < 1
        || email.value.length < 1){
            warningsColegio += `llenar todos los datos <br>`
    }
    


        if(telefono.value.length < 10){
            warningsColegio += `Numero telefonico no valido <br>`
            entrarColegio = true;
        }

        if(!validEmail.test(email.value)){
            warningsColegio += `El Email no es valido <br>`
            entrarColegio = true;
        }



        if(entrarColegio){
            e.preventDefault()
            console.log(parrafoColegio.innerHTML = warningsColegio);
        }

    

    
})