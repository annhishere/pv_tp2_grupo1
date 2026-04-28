import { cambiarTexto, mostrarResultadoPorConsola } from "./funciones19.js"; // Importamos la función desde el archivo funciones19.js

const boton = document.getElementById("btnCambiar"); // Obtenemos el botón por su ID
const parrafo = document.getElementById("texto"); // Obtenemos el párrafo por su ID
const texto = "Estamos en la parte 2 del trabajo práctico n°2 - Ejercicio 19";
const textoBoton = "A trabajar :)";

boton.addEventListener("click", () => {
    cambiarTexto(parrafo, texto); // Llamamos a la función cambiarTexto pasando el párrafo y el nuevo texto como argumentos
    cambiarTexto(boton, textoBoton); // Cambiamos el texto del botón también
    mostrarResultadoPorConsola(texto); // Llamamos a la función mostrarResultadoPorConsola pasando el resultado como argumento
});