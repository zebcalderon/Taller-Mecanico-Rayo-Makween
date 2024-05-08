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

    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    const form = document.getElementById("form")
    const parrafo1 = document.getElementById("warnings1")
    const parrafo2 = document.getElementById("warnings2")
    const parrafo3 = document.getElementById("warnings3")


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
            warningsA += 'El email no es válido<br>'
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