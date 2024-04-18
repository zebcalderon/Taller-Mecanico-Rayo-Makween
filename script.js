var nombre = document.getElementById('nombre');
var rut = document.getElementById('rut');
var appaterno = document.getElementById('appaterno');
var apmaterno = document.getElementById('apmaterno');
var edad = document.getElementById('edad');
var seleccionar = document.getElementById('seleccionar');
var message = document.getElementById('message');

var error = document.getElementById('error');
error.style.color = 'blue';



var from = document.getElementById('formulario');
    from.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajesError = [];

        if(rut.value ===null || rut.value === ''){
            mensajesError.push('Ingresa tu rut');
        }

        if(nombre.values===null || nombre.value === ''){
            mensajesError.push('Ingresa tu nombre');
        }

        if(appaterno.values===null || appaterno.value === ''){
            mensajesError.push('Ingresa tu apellido paterno');
        }

        if(apmaterno.values===null || apmaterno.value === ''){
            mensajesError.push('Ingresa tu apellido materno');
        }

        if(edad.values===null || edad.value === ''){
            mensajesError.push('Ingresa tu edad');
        }

        if(seleccionar.values===null || seleccionar.value === ''){
            mensajesError.push('Ingresa tu edad');
        }

        if(message.values===null || seleccionar.value === ''){
            mensajesError.push('Ingresa tu edad');
        }



        error.innerHTML = mensajesError.join(', ')
    });