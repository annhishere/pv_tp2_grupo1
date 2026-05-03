document.querySelector("#btnMostrar").addEventListener("click", function() {

    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#libreta").value;

    alert(
        "Los datos ingresados son:\n" +
        "Nombre: " + nombre + "\n" +
        "Apellido: " + apellido + "\n" +
        "Libreta Universitaria: " + libreta
    );
});