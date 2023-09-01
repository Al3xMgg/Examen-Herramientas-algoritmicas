// Crear función que filtre números mayores o iguales a 6 y que tome como parámetro un array

const array = [6, 5, 3, 9];

function filtro(array){

    return array >= 6 ;
}

const Mayores = array.filter(filtro);


console.log(Mayores);