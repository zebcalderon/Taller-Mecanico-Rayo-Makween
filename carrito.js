// QUITAR COSAS DE CARRITO
var QuitarProductoCarrito = document.getElementsByClassName('btn-quitar')
console.log(QuitarProductoCarrito)
for (var i = 0; i < QuitarProductoCarrito.length; i++) {
    var button = QuitarProductoCarrito[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
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
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('monto-total')[0].innerText = '$' + total
}

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (price * quantity)
//     }
//     total = Math.round(total * 100) / 100
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }


// ABRIR Y CERRAR CARRITO
document.querySelector('.position-carrito').addEventListener('click', function() {
    // Select the container with the class 'caja-carrito'
    var cart = document.querySelector('.caja-carrito');
    // Toggle the 'hidden' class on the container
    cart.classList.toggle('hidden');
});
