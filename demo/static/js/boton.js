document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de agregar al carrito
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

    // Añadir un evento de clic a cada botón
    botonesAgregarCarrito.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            // Aquí puedes agregar la acción que deseas realizar al hacer clic en el botón
            alert('Producto agregado al carrito!'); // Ejemplo de acción
        });
    });
});
