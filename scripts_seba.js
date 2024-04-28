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