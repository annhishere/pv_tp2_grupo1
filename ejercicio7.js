// Declarar array con nombres (no cambia → const)
const nombres = ["Sol", "Ariana", "Juan", "Valentina", "Esteban", "Galahad"];

// Mostrar título en consola
console.log("Nombres del array:");

// Recorrer el array desde la posición 0 hasta el final
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]); // Mostrar cada nombre
}

// Buscar el nombre más largo
let nombreMasLargo = nombres[0]; // Va a cambiar → let

// Recorrer el array desde el segundo elemento
for (let i = 0; i < nombres.length; i++) {
    // Comparo la longitud del nombre actual con el más largo guardado
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i]; // Se actualiza → let
    }
}

// Mostrar el resultado final
console.log(`El nombre más largo es: ${nombreMasLargo}`);