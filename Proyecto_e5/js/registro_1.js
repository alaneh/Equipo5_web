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

    // Validar estatura en metros (ej: 1.50, 2.00)
    function validarEstatura(estatura) {
        const heightRegex = /^(0(\.\d+)?|[1-2](\.\d+)?|2\.5)$/; // Solo números positivos entre 0 y 2.5
        if (!heightRegex.test(estatura)) {
            return false; // No es válido
        }

        // Convertir a número para asegurarse de que está en rango
        const altura = parseFloat(estatura);
        return altura >= 0.50 && altura <= 2.50; // Rango lógico para humanos
    }
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
            alert("El correo debe ser institucional y terminar en @alumno.ipn.mx.");
            return;
        }

        // Validar número de boleta (solo números positivos con "63" en el formato)
        const boletaRegex = /^\d{4}63\d{4}$/;
        if (!boletaRegex.test(boletaInput.value)) {
            alert("Ingresa un número de boleta válido de ESCOM (formato: 4 dígitos, '63', 4 dígitos).");
            return;
        }

        // Validar nombre y apellidos (solo letras con mayúsculas, minúsculas y tildes)
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!nameRegex.test(nombreInput.value.trim())) {
            alert("El nombre solo puede contener letras y espacios.");
            return;
        }
        if (!nameRegex.test(apellidoPaterno.value.trim())) {
            alert("El primer apellido solo puede contener letras y espacios.");
            return;
        }
        if (!nameRegex.test(apellidoMaterno.value.trim())) {
            alert("El segundo apellido solo puede contener letras y espacios.");
            return;
        }

        // Validar teléfono (10 dígitos, solo números enteros y positivos)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(telefono.value)) {
            alert("El teléfono debe contener exactamente 10 dígitos numéricos.");
            return;
        }

        // Validar estatura (números positivos, permitiendo decimales)

        if (!validarEstatura(estatura.value.trim())) {
            alert("La estatura debe ser un valor válido entre 0.50 y 2.50 metros.");
            return;
        }

        // Validar casillero si es renovación (número entero no negativo)
        const tipoSolicitud = document.querySelector('input[name="solicitud"]:checked').id;
        const lockerRegex = /^\d+$/; // Acepta solo números enteros positivos o cero
        if (tipoSolicitud === "renovacion") {
            if (!lockerRegex.test(casilleroInput.value)) {
                alert("El número de casillero debe ser un número entero no negativo.");
                return;
            }
        }

        // Guardar datos en localStorage
        const datos = {
            tipoSolicitud: tipoSolicitud === "renovacion" ? "Renovación" : "Solicitar por primera vez",
            numeroLocker: casilleroInput?.value || "N/A",
            nombre: nombreInput.value.trim(),
            apellidoPaterno: apellidoPaterno.value.trim(),
            apellidoMaterno: apellidoMaterno.value.trim(),
            telefono: telefono.value,
            correo: correoInput.value,
            boleta: boletaInput.value,
            estatura: estatura.value
        };
        localStorage.setItem('datosRegistro', JSON.stringify(datos));
        window.location.href = 'registro_2.html';
    });
});
