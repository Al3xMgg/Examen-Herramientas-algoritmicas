// Crear una función que obtenga la cantidad de x elemento de una matriz

function busqueda(matriz, elemento){

    let cont = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == elemento) {
                cont = cont+1                
            };
        }
    }
    return cont;
}

const matriz = [
    [9, 3, "😴", 5],
    [8, "😴", 3, 1],
    [1, "😴", 1, 1],
    [3, 4 , 6, 1]
];

const elemento = "😴"

console.log(busqueda(matriz, elemento))