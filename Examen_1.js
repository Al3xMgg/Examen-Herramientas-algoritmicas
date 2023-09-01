//Crear una función que obtenga número mayor de una matriz 4x4 y que tome como parámetro matriz

function numeroMayor(matriz){

    let Mayor = matriz[0][0];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] > Mayor){
                Mayor = matriz[i][j];
            }
        }
    };

    return Mayor;
};

const matriz = [
    [9, 3, 2, 5],
    [8, 2, 3, 1],
    [1, 2, 1, 1],
    [3, 4 , 6, 1]
];

const matrizMayor = numeroMayor(matriz);

console.log("El numero mayor es: ", matrizMayor);