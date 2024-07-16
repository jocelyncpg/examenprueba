document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const parrafo = document.getElementById("warnings");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        parrafo.innerHTML = "";

        const name = document.getElementById("name");
        const apellido = document.getElementById("apellido");
        const ciudad = document.getElementById("ciudad");
        const telefono = document.getElementById("telefono");
        const local = document.getElementById("local");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if (name.value.length < 4) {
            warnings += `El nombre no es válido <br>`;
            entrar = true;
        }
        if (apellido.value.length < 5) {
            warnings += `El apellido no es válido <br>`;
            entrar = true;
        }
        if (ciudad.value.length < 5) {
            warnings += `La ciudad no es válida <br>`;
            entrar = true;
        }
        if (telefono.value.length < 8) {
            warnings += `El teléfono no es válido <br>`;
            entrar = true;
        }
        if (local.value.length < 6) {
            warnings += `El alias es muy corto <br>`;
            entrar = true;
        }
        if (!regexEmail.test(email.value)) {
            warnings += `El correo electrónico no es válido <br>`;
            entrar = true;
        }
        if (password.value.length < 8) {
            warnings += `La contraseña es muy corta <br>`;
            entrar = true;
        }

        if (entrar) {
            parrafo.innerHTML = warnings;
        } else {
            parrafo.innerHTML = "Enviado con éxito!";
            // Aquí puedes enviar el formulario con AJAX o realizar alguna otra acción
            // Por ejemplo: form.submit();
        }
    });
});
