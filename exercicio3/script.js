// # Exercício 3
console.log(`Exercício 3 - feedback Funções`);
// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function somar(numero1,numero2) {
    return numero1 + numero2
}

function subtrair(numero1,numero2) {
    return numero1 - numero2
}
    
function multiplicar(numero1,numero2) {
    return numero1 * numero2
}
    
function dividir(numero1,numero2) {
    return numero1 / numero2
}

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let numero1 = Number (prompt(`Digite um número`))
let numero2 = Number (prompt(`Digite outro número`))
console.log("Números escolhidos:",numero1,numero2);

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

console.log("Somar =",somar(numero1,numero2));
console.log("Subtrair =",subtrair(numero1,numero2));
console.log("Multiplicar =",multiplicar(numero1,numero2));
console.log("Dividir =",dividir(numero1,numero2));

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

let resultadoSoma = somar(numero1,numero2)
console.log(resultadoSoma);
let resultadoSubtracao = subtrair(numero1,numero2)
console.log(resultadoSubtracao);
let resultadoMultiplicacao = multiplicar(numero1,numero2)
console.log(resultadoMultiplicacao);
let resultadoDivisao = dividir(numero1,numero2)
console.log(resultadoDivisao);


