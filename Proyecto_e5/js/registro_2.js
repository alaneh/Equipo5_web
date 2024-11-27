
document.addEventListener("DOMContentLoaded", function () {
    let comprobarBtn = document.querySelector('#comprobarBtn');
    const credencialInput = document.querySelector('#credencial');
    const horarioInput = document.querySelector('#horario');
    const usuarioInput = document.querySelector('#usuario');
    const claveInput = document.querySelector('#clave');
    const datos = JSON.parse(localStorage.getItem('datosRegistro')) || {};

    comprobarBtn.addEventListener('click', function () {
        // Validar archivos subidos
        const credencialValida = credencialInput.files[0]?.name.endsWith('.pdf');
        const horarioValido = horarioInput.files[0]?.name.endsWith('.pdf');
        var usuario = document.getElementById('usuario').value;
        var clave = document.getElementById('clave').value;
        
        if (!credencialValida || !horarioValido) {
            alert('Ambos archivos deben ser PDFs válidos.');
            return;
        }
        if (usuario === '' || clave === '') {
            alert('Por favor, ingrese un usuario y una contraseña válidos.');
            return;
        }
        // Regex para validar usuario
        const usuarioRegex = /^[a-zA-Z0-9]+$/;
        if (!usuarioRegex.test(usuario.trim())) {
            alert('El usuario solo puede contener letras y números, sin espacios.');
            return;
        }
        // Guardar nombres de archivos en localStorage
        datos.archivoCredencial = credencialInput.files[0]?.name || 'No subido';
        datos.archivoHorario = horarioInput.files[0]?.name || 'No subido';
        datos.usuario = usuarioInput.value;
        datos.clave = claveInput.value;
        localStorage.setItem('datosRegistro', JSON.stringify(datos));

        // Redirigir a summary.html
        window.location.href = 'registro_3.html';
    });
});
