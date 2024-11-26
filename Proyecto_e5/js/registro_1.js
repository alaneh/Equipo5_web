document.addEventListener("DOMContentLoaded", function () {
    const siguienteBtn = document.querySelector('#siguienteBtn');
    const correoInput = document.querySelector('#correo');
    const boletaInput = document.querySelector('#boleta');
    const casilleroInput = document.querySelector('#numeroCasillero');
    const casilleroContainer = document.querySelector('#numeroCasillero').parentElement;
    const solicitudRadios = document.querySelectorAll('input[name="solicitud"]');

    // Mostrar/ocultar el campo del casillero según la selección
    solicitudRadios.forEach((radio) => {
        radio.addEventListener("change", function () {
            if (this.id === "renovacion") {
                casilleroContainer.classList.remove("hidden");
                casilleroContainer.classList.add("visible");
            } else {
                casilleroContainer.classList.remove("visible");
                casilleroContainer.classList.add("hidden");
                casilleroInput.value = ""; // Limpiar si no es renovación
            }
        });
    });

    // Manejar el clic en el botón "Siguiente"
    siguienteBtn.addEventListener("click", function () {
        const nombreInput = document.querySelector('#nombre');
        const apellidoPaterno = document.querySelector('#apellidoPaterno');
        const apellidoMaterno = document.querySelector('#apellidoMaterno');
        const telefono = document.querySelector('#telefono');
        const estatura = document.querySelector('#estatura');

        // Validar correo institucional
        const emailRegex = /^[a-zA-Z0-9._%+-]+@alumno\.ipn\.mx$/;
        if (!emailRegex.test(correoInput.value)) {
            alert("El correo debe ser institucional.");
            return;
        }

        // Validar número de boleta
        const boletaRegex = /^\d{4}63\d{4}$/; // Debe contener "63" en las posiciones 5 y 6
        if (!boletaRegex.test(boletaInput.value)) {
            alert("Ingresa una boleta de ESCOM.");
            return;
        }

        // Validar casillero si es renovación
        const tipoSolicitud = document.querySelector('input[name="solicitud"]:checked').id;
        if (tipoSolicitud === "renovacion" && !casilleroInput.value) {
            alert("Por favor, ingresa tu número de casillero para la renovación.");
            return;
        }

        // Guardar datos en localStorage
        const datos = {
            tipoSolicitud: tipoSolicitud === "renovacion" ? "Renovación" : "Solicitar por primera vez",
            numeroLocker: casilleroInput?.value || "N/A",
            nombre: nombreInput.value,
            apellidoPaterno: apellidoPaterno.value,
            apellidoMaterno: apellidoMaterno.value,
            telefono: telefono.value,
            correo: correoInput.value,
            boleta: boletaInput.value,
            estatura: estatura.value
        };
        localStorage.setItem('datosRegistro', JSON.stringify(datos));
        window.location.href = 'registro_2.html';
    });
});
