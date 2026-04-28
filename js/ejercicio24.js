// Seleccionamos los elementos
const radios = document.querySelectorAll('input[name="lenguaje"]'); // Seleccionamos el elemento donde mostraremos el resultado
// document.querySelectorAll devuelve una NodeList, que es similar a un array, pero no tiene todos los métodos de un array. Sin embargo, podemos usar forEach para iterar sobre ella.
// radios contiene una NodeList de los radio buttons con el nombre "lenguaje"

const resultado = document.getElementById('resultado');


// Evento change
/* Para cada elemento en la NodeList de radios lo llamaremos "radio" */
radios.forEach(radio => {
  radio.addEventListener('change', function() {
    const valorSeleccionado = this.value;

    // Mostrar en pantalla
    //resultado.textContent = "Seleccionaste: " + valorSeleccionado;
    //Variante
    resultado.innerHTML = 'Seleccionaste: <span>' + valorSeleccionado + '</span>';

    // Mostrar en consola
    console.log("Lenguaje seleccionado:", valorSeleccionado);
  });
});