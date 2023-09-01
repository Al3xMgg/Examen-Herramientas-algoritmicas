// Crear función que identifique por medio de false o true si una matriz es cuadrada y que tome como parámetro matriz

function Cuadrada(matriz) {

    let fila = matriz.length

    for(let i=0; i<fila; i++){
        if(matriz[i].length!==fila){
        return false
        }
    }
    return true
}

const matriz = [
    [9, 3, 2, 8],
    [8, 2, 3],
    [1, 2, 1, 1],
    [3, 4, 6]
]

console.log(Cuadrada(matriz))