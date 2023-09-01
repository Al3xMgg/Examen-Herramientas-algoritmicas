// Crear función que sume dos arreglos y que el resultado se agregue en un nuevo arreglo

function suma(a, b) {

    c = [];

    for (let i = 0; i < a.length; i++) {
        c.push(a[i] + b[i]);
    }

    return c;
}

const a = [3, 5, 9];
const b = [10, 8, 4];

console.log("La suma de los dos arreglos es: ", suma(a, b))