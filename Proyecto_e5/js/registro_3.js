document.addEventListener("DOMContentLoaded", function () {
    const datos = JSON.parse(localStorage.getItem('datosRegistro')) || {};
    const numeroLocker = document.getElementById('numeroLocker');
    const tipoSolicitud = document.getElementById('tipoSolicitud');
    const nombreCompleto = document.getElementById('nombreCompleto');
    const telefono = document.getElementById('telefono');
    const correo = document.getElementById('correo');
    const boleta = document.getElementById('boleta');
    const estatura = document.getElementById('estatura');
    const archivoHorario = document.getElementById('archivoHorario');
    const archivoCredencial = document.getElementById('archivoCredencial');
    const usuario = document.getElementById('usuario');
    const sendInfoBtn = document.getElementById('sendInfoBtn');
    const summarySection = document.getElementById('summary-section');
    const successSection = document.getElementById('success-section');

    tipoSolicitud.textContent = datos.tipoSolicitud;
    nombreCompleto.textContent = `${datos.nombre} ${datos.apellidoPaterno} ${datos.apellidoMaterno}`;
    telefono.textContent = datos.telefono;
    correo.textContent = datos.correo;
    boleta.textContent = datos.boleta;
    estatura.textContent = datos.estatura;
    archivoHorario.textContent = datos.archivoHorario || 'No subido';
    archivoCredencial.textContent = datos.archivoCredencial || 'No subido';
    usuario.textContent = datos.usuario;

    if (datos.tipoSolicitud === 'Renovación') {
        numeroLocker.textContent = datos.numeroLocker;
    } else {
        numeroLocker.parentElement.style.display = 'none';
    }

    sendInfoBtn.addEventListener('click', function () {
        summarySection.classList.add('d-none');
        successSection.classList.remove('d-none');
    });
}); 