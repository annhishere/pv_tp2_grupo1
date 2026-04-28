const edades = [10,40, 25, 45, 56, 48, 50, 15];
let suma = 0;
for (let i = 0; i < edades.length; i++) {
    console.log(`La edad en la posición ${i} es: ${edades[i]}`);
    suma += edades[i];
}
const promedio = suma / edades.length;
console.log(`El promedio de las edades es: ${promedio.toFixed(2)}`);