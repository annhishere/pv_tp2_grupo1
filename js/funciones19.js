export const cambiarTexto = (elemento, nuevoTexto) => { // Definimos la función cambiarTexto que recibe un elemento y el nuevo texto como parámetros
    elemento.textContent = nuevoTexto; 
};

export const mostrarResultadoPorConsola = (resultado) => { // Definimos la función mostrarResultadoPorConsola que recibe un resultado como parámetro
    console.log(resultado); // Imprime el resultado en la consola
};