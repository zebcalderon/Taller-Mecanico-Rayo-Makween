if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    actualizarTotalCarro()

    var QuitarProductoCarrito = document.getElementsByClassName('btn-quitar')
    console.log(QuitarProductoCarrito)
    for (var i = 0; i < QuitarProductoCarrito.length; i++) {
        var button = QuitarProductoCarrito[i]
        button.addEventListener('click', quitarProducto)
    }

    var cantidadProductoCarrito = document.getElementsByClassName('cantidad')
    for (var i = 0; i < cantidadProductoCarrito.length; i++){
        var input = cantidadProductoCarrito[i]
        input.addEventListener('change', cantidadActualizada)
    }
}

function quitarProducto(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    actualizarTotalCarro()
}

function cantidadActualizada(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
        actualizarTotalCarro()
    }
    actualizarTotalCarro()
}
// Antiguo código de quitarProducto
// var QuitarProductoCarrito = document.getElementsByClassName('btn-quitar')
// console.log(QuitarProductoCarrito)
// for (var i = 0; i < QuitarProductoCarrito.length; i++) {
//     var button = QuitarProductoCarrito[i]
//     button.addEventListener('click', function(event) {
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//         actualizarTotalCarro()
//     })
// }


// QUITAR COSAS DE CARRITO
var QuitarProductoCarrito = document.getElementsByClassName('btn-quitar')
console.log(QuitarProductoCarrito)
for (var i = 0; i < QuitarProductoCarrito.length; i++) {
    var button = QuitarProductoCarrito[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        actualizarTotalCarro()
    })
}

function actualizarTotalCarro() {
    var cajaitemsCarro = document.getElementsByClassName('caja-carrito')[0]
    var filascarro = cajaitemsCarro.getElementsByClassName('fila-items-carro')
    var total = 0
    for (var i = 0; i < filascarro.length; i++) {
        var cartRow = filascarro[i]
        var priceElement = cartRow.getElementsByClassName('precio')[0]
        var quantityElement = cartRow.getElementsByClassName('cantidad')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = total.toFixed(3)
    document.getElementsByClassName('monto-total')[0].innerText = '$' + total
}


// ABRIR Y CERRAR CARRITO
document.querySelector('.position-carrito').addEventListener('click', function() {
    var cart = document.querySelector('.caja-carrito');
    cart.classList.toggle('hidden');
});
