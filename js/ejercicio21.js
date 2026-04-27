const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

// Objeto que relaciona país -> capital 
const relacion = {
    argentina: "buenosaires",
    brasil: "brasilia",
    chile: "santiago",
    mexico: "cdmx",
    colombia: "bogota",
    peru: "lima"
};

// Evento que se ejecuta cuando cambia el país seleccionado
paises.addEventListener("change", () => {

    // Obtiene el país seleccionado
    const valorPais = paises.value;

    // Selecciona automáticamente la capital correspondiente
    capitales.value = relacion[valorPais];

    // Verifica que haya un país seleccionado
    if (valorPais) {

        // Obtiene el nombre visible del país 
        const nombrePais = paises.options[paises.selectedIndex].text;

        // Busca la capital según el país
        const capital = relacion[valorPais];

        // Muestra en consola
        console.log("País seleccionado:", nombrePais);
        console.log("Capital correspondiente:", capital);

    } else {
        console.log("No hay selección");
    }
});