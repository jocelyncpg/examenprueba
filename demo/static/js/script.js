
// Función para redirigir a la página de pago
function redirigirAPago() {
    // Obtener el total desde sessionStorage
    let total = sessionStorage.getItem('total');
    if (total) {
        // Redirigir a la página de pago con el total como parámetro
        window.location.href = '/pagar/?total=' + total;
    } else {
        alert('No hay productos en el carrito.');
    }
}

// Función para manejar el carrito y calcular el total
document.addEventListener('DOMContentLoaded', function () {
    const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');

    agregarCarritoButtons.forEach(button => {
        button.addEventListener('click', agregarAlCarritoClicked);
    });


    function agregarAlCarritoClicked(event) {
        let button = event.target;
        let productItem = button.parentElement;
        let title = productItem.querySelector('h3').innerText;
        let price = productItem.querySelector('.precio').innerText;
        let imgSrc = productItem.parentElement.querySelector('img').src;
        agregarItemAlCarrito(title, price, imgSrc);
        actualizarTotal();
    }

    function agregarItemAlCarrito(title, price, imgSrc) {
        let carritoRow = document.createElement('div');
        carritoRow.classList.add('carrito-row');
        let carritoItems = document.querySelector('.carrito-items');
        let carritoItemNombres = carritoItems.querySelectorAll('.carrito-item-title');
        for (let i = 0; i < carritoItemNombres.length; i++) {
            if (carritoItemNombres[i].innerText == title) {
                alert('Este artículo ya ha sido agregado al carrito.');
                return;
            }
        }

        let carritoRowContenido = `
            <div class="carrito-item carrito-column">
                <img class="carrito-item-image" src="${imgSrc}" width="100" height="100">
                <span class="carrito-item-title">${title}</span>
            </div>
            <span class="carrito-precio carrito-column">${price}</span>
            <div class="carrito-quantity carrito-column">
                <input class="carrito-cantidad" type="number" value="1">
                <button class="btn btn-danger" type="button">QUITAR</button>
            </div>`;
        carritoRow.innerHTML = carritoRowContenido;
        carritoItems.append(carritoRow);
        carritoRow.querySelector('.btn-danger').addEventListener('click', quitarItem);
        carritoRow.querySelector('.carrito-cantidad').addEventListener('change', cantidadChanged);
    }


    function quitarItem(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        actualizarTotal();
    }

    function cantidadChanged(event) {
        let input = event.target;
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        actualizarTotal();
    }

    function actualizarTotal() {
        let carritoItemContainer = document.querySelector('.carrito-items');
        let carritoRows = carritoItemContainer.querySelectorAll('.carrito-row');
        let total = 0;
        carritoRows.forEach((carritoRow) => {
            let carritoPrecioElement = carritoRow.querySelector('.carrito-precio');
            let carritoCantidadElement = carritoRow.querySelector('.carrito-cantidad');
            let precio = parseFloat(carritoPrecioElement.innerText.replace('$', ''));
            let cantidad = carritoCantidadElement.value;
            total = total + (precio * cantidad);
        });
        document.querySelector('.total-precio').innerText = '$' + total;
        sessionStorage.setItem('total', total);
    }


});