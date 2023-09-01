// Crear una función que haga la cuenta regresiva y que tome como parámetro numeroInicial recuerde utilizar en este caso 
// el metodo push()

function cuentaRegresiva(numeroInicial){

    cuenta = [];

    for (let i = numeroInicial; i > 0 ; i--) {
        cuenta.push(i)
        
    }
    return cuenta;
}

const numeroInicial = 7

console.log(cuentaRegresiva(numeroInicial))