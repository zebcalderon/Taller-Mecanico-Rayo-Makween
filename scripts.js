function sumar(){

    var v1=parseInt(document.getElementById("valor1").value);
    var v2=parseInt(document.getElementById("valor2").value);
    var suma=0;
    
    suma=v1+v2;

    document.getElementById("resultado").value=suma;
}

function carta() {

    var vrut=String(document.getElementById("rut").value);
    var vnombre=String(document.getElementById("nombre").value);
    var vappaterno=String(document.getElementById("appaterno").value);
    var vapmaterno=String(document.getElementById("apmaterno").value);
    var vnacimiento=Date(document.getElementById("nacimiento").value);
    var vedad=parseInt(document.getElementById("edad").value);
    var vgenero=String(document.getElementById("genero").value);
    var vcorreo=String(document.getElementById("correo").value);
    var vcelular=parseInt(document.getElementById("celular").value);
    var vprofesion=String(document.getElementById("profesion").value);
    var vmotivacion=String(document.getElementById("motivo").value);

    document.getElementById("rrut").value=vrut;
    document.getElementById("rnombre").value=vnombre;
    document.getElementById("rappaterno").value=vappaterno;
    document.getElementById("rapmaterno").value=vapmaterno;
    document.getElementById("rnacimiento").value=vnacimiento;
    document.getElementById("redad").value=vedad;
    document.getElementById("rgenero").value=vgenero;
    document.getElementById("rcorreo").value=vcorreo;
    document.getElementById("rcelular").value=vcelular;
    document.getElementById("rprofesion").value=vprofesion;
    document.getElementById("rmotivo").value=vnombre;
}   