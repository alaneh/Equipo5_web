document.addEventListener("DOMContentLoaded", function () {
    const logoElementIPN = document.querySelector('#logo-ipn');
    const logoElementESCOM = document.querySelector('#logo-escom');
    logoElementIPN.addEventListener("click", function () {
        window.open("https://www.ipn.mx", "_blank"); // Abre la dirección en una nueva pestaña
    });
    logoElementESCOM.addEventListener("click", function () {
        window.open("https://www.escom.ipn.mx", "_blank"); // Abre la dirección en una nueva pestaña
    });
});