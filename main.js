// FUNCIÓN PARA TOMAR INFORMACIÓN DE INPUTS
function carta() {

    var vrut=document.getElementById("rut").value;
    var vpnombre=document.getElementById("nombre").value;  
    var vappaterno=document.getElementById("appaterno").value;
    var vapmaterno=document.getElementById("apmaterno").value;
    var vnacimiento=document.getElementById("nacimiento").value;
    var vedad=document.getElementById("edad").value;
    var vcorreo=document.getElementById("correo").value;
    var vcelular=document.getElementById("celular").value;
    var vprofesion=document.getElementById("profesion").value;
    var vmotivacion=document.getElementById("motivo").value;
    var vgenero=document.getElementById("genero").value;

    var vnombre = vpnombre + " " + vappaterno + " " + vapmaterno;


    rrut.textContent = vrut;
    rnombre.textContent = vnombre;
    rnacimiento.textContent = vnacimiento;
    redad.textContent = vedad;
    rcorreo.textContent = vcorreo;
    rcelular.textContent = vcelular;
    rprofesion.textContent = vprofesion;
    // rmotivo.textContent = vmotivo;
    rgenero.textContent = vgenero;

    console.log("Input values:", vcelular);
}
// Funcion creada por Gastón para validar el inicio de sesión
function valida(){

    let email = document.getElementById("email")
    let pass = document.getElementById("pass")
    let form = document.getElementById("form")
    let parrafo1 = document.getElementById("warnings1")
    let parrafo2 = document.getElementById("warnings2")
    let parrafo3 = document.getElementById("warnings3")


    form.addEventListener("submit", e=>{
        e.preventDefault()
        let warningsA = ""
        let warningsB = ""
        let entrar = false
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/
        parrafo1.innerHTML = ""
        parrafo2.innerHTML = ""
        parrafo3.innerHTML = ""

        if(!regexEmail.test(email.value)){
            warningsA = 'El email no es válido'
            entrar = true
            email.style.border= 'solid 1px red';
        }else{
            email.style.border= '';
        }

        if(pass.value.length < 5) {
            warningsB += 'La contraseña no es válida'
            entrar = true
            pass.style.border= 'solid 1px red';
        }else{
            pass.style.border= '';
        }

        if(entrar){
            parrafo1.innerHTML = warningsA
            parrafo2.innerHTML = warningsB
        } else {
            parrafo3.innerHTML = "Enviado"
        }
    })
}

function validaContacto(){
    
    let nombresC = document.getElementById("nombreContacto");
    let telefonoC = document.getElementById("telefonoContacto");
    let correoC = document.getElementById("correoContacto");
    let messageC = document.getElementById("messageContacto");
    let formC = document.getElementById("formContacto");
    let parrafo = document.getElementById("warningContacto");

    formC.addEventListener("submit", e=>{
        e.preventDefault();
        let warningC = "";
        let entrar = false;
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/
        parrafo.innerHTML = "";

        if(nombresC.value.length < 5) {
            warningC += "El nombre ingresado es muy corto<br>";
            entrar = true;
        }
        if(telefonoC.value.length < 7) {
            warningC += "El teléfono ingresado es muy corto<br>";
            entrar = true;
        }
        if(!regexEmail.test(correoC.value)) {
            warningC += "El correo ingresado es incorrecto<br>";
            entrar = true;
        }
        if(messageC.value.length <5) {
            warningC += "El mensaje ingresado es muy corto<br>";
            entrar = true;
        }

        if(entrar){
            parrafo.innerHTML = warningC;
        }else{
            parrafo.innerHTML = "Enviado";
        }
    })

} 

function validaRegistro(){
    
    let nombre = document.getElementById("p_nombre");
    let apellido = document.getElementById("ap_paterno");
    let telefonoB = document.getElementById("telefonoContacto");
    let correoB = document.getElementById("correoContacto");
    let pass1 = document.getElementById("password_1");
    let pass2 = document.getElementById("password_2");
    let formB = document.getElementById("formRegistro");
    let parrafo = document.getElementById("warningContacto");

    formB.addEventListener("submit", e=>{
        e.preventDefault();
        let warningB = "";
        let entrar = false;
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/
        parrafo.innerHTML = "";

        if(nombre.value.length < 3) {
            warningB += "El nombre ingresado es muy corto<br>";
            entrar = true;
        }
        if(apellido.value.length < 4) {
            warningB += "El nombre ingresado es muy corto<br>";
            entrar = true;
        }
        if(telefonoB.value.length < 7) {
            warningB += "El teléfono ingresado es muy corto<br>";
            entrar = true;
        }
        if(!regexEmail.test(correoB.value)) {
            warningB += "El correo ingresado es incorrecto<br>";
            entrar = true;
        }
        if(pass1.value.length < 3) {
            warningB += "La contraseña ingresada es muy corta<br>";
            entrar = true;
        }
        if(pass1===pass2) {
            warningB += "Las contraseñas no coinciden<br>";
            entrar = true;
        }

        if(entrar){
            parrafo.innerHTML = warningB;
        }else{
            parrafo.innerHTML = "Enviado";
        }
    })

} 


window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        document.querySelector('.go-top-container')
        .classList.add('show')
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show')
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});