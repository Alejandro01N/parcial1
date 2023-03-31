const cc = document.getElementById("cedula");
const tel = document.getElementById("telefono");
const nombre = document.getElementById("nombre")
const email = document.getElementById("direccion")
const sueldo = document.getElementById("sueldo")
const edad = document.getElementById("edad")
const direcion = document.getElementById("carrera")
const parrafoColegio = document.getElementById("warningsColegio");
const enviar = document.querySelector(".btn")


function maxLengthTelefono(obj){
    if(obj.value.length > obj.maxLength){
        obj.value = obj.value.slice(0 , obj.maxLength)
    }
}

enviar.addEventListener("click" , (e)=>{

    let warningsColegio = "";
    let entrarColegio = false;
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    parrafoColegio.innerHTML = "";

    if(cc.value.length < 1 || tel.value.length < 1 ||  nombre.value.length < 1 || email.value.length < 1 || sueldo.value.length < 1
        || edad.value.length < 1 || direcion.value.length < 1){
            warningsColegio += `llenar todos los campos <br>`
    }





        if(tel.value.length < 10){
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

