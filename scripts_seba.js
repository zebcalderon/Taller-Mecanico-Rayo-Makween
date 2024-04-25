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
    // var vnombre=document.getElementById("nombre").value;
    // var vappaterno=document.getElementById("appaterno").value;
    // var vapmaterno=document.getElementById("apmaterno").value;
    // var vnacimiento=Date(document.getElementById("nacimiento").value);
    // var vedad=parseInt(document.getElementById("edad").value);
    // var vgenero=document.getElementById("genero").value;
    // var vcorreo=document.getElementById("correo").value;
    // var vcelular=parseInt(document.getElementById("celular").value);
    // var vprofesion=document.getElementById("profesion").value;
    // var vmotivacion=document.getElementById("motivo").value;
    document.getElementById("rrut").value=vrut;
    // document.getElementById("rnombre").value=vnombre;
    // document.getElementById("rappaterno").value=vappaterno;
    // document.getElementById("rapmaterno").value=vapmaterno;
    // document.getElementById("rnacimiento").value=vnacimiento;
    // document.getElementById("redad").value=vedad;
    // document.getElementById("rgenero").value=vgenero;
    // document.getElementById("rcorreo").value=vcorreo;
    // document.getElementById("rcelular").value=vcelular;
    // document.getElementById("rprofesion").value=vprofesion;
    // document.getElementById("rmotivo").value=vnombre;

    console.log("Input values:", vrut);
}


$(function(){
    $("#enviarcarta").click(function(){
        $("#rrut").val("233232");
    })
    
});