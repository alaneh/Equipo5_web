document.getElementById('loginBtn').addEventListener('click', function() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    // Lista de usuarios y contraseñas válidos
    var validUsers = {
        'Usuario1': '123456',
        'Usuario2': '987654',
        'Usuario3': '000000',
        'Usuario4': 'Equipo5'
    };

    if (validUsers[usuario] && validUsers[usuario] === password) {
        window.location.href = 'bienvenida.html'; // Redireccionar a la página de bienvenida
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});