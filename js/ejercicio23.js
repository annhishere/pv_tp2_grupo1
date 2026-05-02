const entrada = document.getElementById("entradaTexto");
const salida = document.getElementById("textoMostrado");

entrada.addEventListener("input", () => {

    if (entrada.value === "") {
        salida.textContent = "Esperando entrada de texto...";
    } else {
        salida.textContent = entrada.value;
    }

    // Cambio de color si supera 20 caracteres
    if (entrada.value.length > 20) {
        salida.style.backgroundColor = "lightcoral";
    } else {
        salida.style.backgroundColor = "white";
    }
});