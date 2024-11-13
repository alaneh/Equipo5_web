let numero1 = 0;
let numero2 = 0;
let operacionActual = "";

function seleccionarOperador(operador) {
    document.getElementById("pantalla").textContent = operador;
    operacionActual = operador;
}

function resetearPantalla() {
    numero1 = 0;
    numero2 = 0;
    operacionActual = "";
    document.getElementById("pantalla").textContent = "0";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

function calcularResultado() {
    numero1 = parseFloat(document.getElementById("n1").value);
    numero2 = parseFloat(document.getElementById("n2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("pantalla").textContent = "Error";
        return;
    }

    let resultado = 0;
    switch (operacionActual) {
        case "%":
            resultado = numero1 % numero2;
            break;
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
        case "x":
            resultado = numero1 * numero2;
            break;
        default:
            resultado = "Error";
    }
    document.getElementById("pantalla").textContent = resultado;
}