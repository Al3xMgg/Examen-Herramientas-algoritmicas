// Crear una función que obtenga la fila más larga de una matriz, que tome como parámetro matriz

function Larga(matriz) {

    let fila = matriz[0];
    let Mayor = matriz[0].length;

    for (let i = 1; i < matriz.length; i++) {
    if (matriz[i].length > Mayor) {
      fila = matriz[i];
      Mayor = matriz[i].length;
    }
  }

  return fila;
};
const matriz = [
    [9, 3, 2],
    [8, 2, 3, 1, 2],
    [1, 2, 1, 1],
    [3, 4, 6]
];

console.log("La fila mas larga es: ", Larga(matriz))