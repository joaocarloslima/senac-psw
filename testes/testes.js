function dobro(numero){
    return numero * 2 
}

quadrado = numero => numero * numero

quadrado = (numero) => {
    return numero * numero
}

console.log(dobro(100))
console.log(quadrado(5))

function media(...numeros){
    let soma = 0
    numeros.forEach(numero => soma += numero)
    // for(i = 0; i<numeros.length; i++){
    //     soma = soma + numeros[i]
    // }

    return (soma) / numeros.length
}

console.log(media(10,8))
console.log(media(10,8, 5, 9))

function valorFuturo(investimento, taxa=0.01, periodos=1){
    var vf = investimento * Math.pow( ( 1 + taxa), periodos)
    return vf
}

console.log(valorFuturo(1000, 0.02, 12))

function criarSomador(x){
    return function (y){
        return x + y
    }
}

var soma5 = criarSomador(5)
var soma10 = criarSomador(10)

console.log(soma5(10))
console.log(soma10(10))

