// # Exercício 2 - Declare e invoque as funções abaixo:
console.log(`Exercício 2 - feedback Funções`);
// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

let somarDoisNumeros = (numero1,numero2) => {
    console.log("a)",numero1 + numero2);
}
somarDoisNumeros(9,6)


// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const compararDoisNumeros = function(numero1,numero2) {
    console.log("b)",numero1 >= numero2);
}
compararDoisNumeros(7,3)
compararDoisNumeros(7,9)
compararDoisNumeros(7,7)

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

const parOuNao = (numero) => {
    console.log("c) Par é true|Ímpar é false:",`(${numero})`,numero % 2 === 0);
}
parOuNao(10)
parOuNao(7)

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function salarioLiquido(salarioBruto) {
    let descontoInss = 0.10
    return salarioBruto - (salarioBruto * descontoInss)
}
console.log("d) Salário líquido = R$",salarioLiquido(1000));
