export function cambiarColorFondo() {
    const colores= ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink', 'lightgray'];
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
}
document.getElementById('btnCambiarColor').addEventListener('click', () => {
    document.body.style.backgroundColor = cambiarColorFondo();
});