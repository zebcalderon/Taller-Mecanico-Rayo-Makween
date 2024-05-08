function sumar(){

    var v1=parseInt(document.getElementById("valor1").value);
    var v2=parseInt(document.getElementById("valor2").value);
    var suma=0;
    
    suma=v1+v2;

    document.getElementById("resultado").value=suma;
}

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