let pantalla = document.getElementById("pantalla");
let operador = "";
let num1 = 0;
let num2 = 0;

document.getElementById("n1").addEventListener("input", function() {
    num1 = parseFloat(this.value) || 0;
});

document.getElementById("n2").addEventListener("input", function() {
    num2 = parseFloat(this.value) || 0;
});

document.querySelectorAll("button[name='operador']").forEach(boton => {
    boton.addEventListener("click", function() {
        operador = this.textContent;
        pantalla.textContent = operador;
    });
});

document.getElementById("igual").addEventListener("click", function() {
    let resultado = 0;
    switch (operador) {
        case "%":
            resultado = num1 % num2;
            break;
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Error";
            break;
        case "x":
            resultado = num1 * num2;
            break;
        default:
            resultado = "Operador no válido";
    }
    pantalla.textContent = resultado;
});

document.getElementById("reiniciar").addEventListener("click", function() {
    num1 = 0;
    num2 = 0;
    operador = "";
    pantalla.textContent = "0";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
});