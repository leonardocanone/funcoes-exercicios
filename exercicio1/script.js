// # Exercício 1
console.log(`Exercício 1 - feedback Funções`);
// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
// Formato Arrow
const olaLeonardo = (meuNome) => {
    console.log(`a) Olá ${meuNome}! Formato Arrow Functions`);
}
olaLeonardo(`Leonardo`)

//Formato convencional
function olaLeonardo2(meuNome) {
    console.log(`a) Olá ${meuNome}! Formato Convencional`);
}
olaLeonardo2(`Leonardo`)

//Formato não-nomeada
const olaLeonardo3 = function(meuNome) {
    console.log(`a) Olá ${meuNome}! Formato Expressões de função`);
}
olaLeonardo3(`Leonardo`)

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

// function tabuada(numero)
// let tabuada = function(numero)
let tabuada = (numero) => 

{
    console.log(`b) Tabuada do ${numero}`);
    console.log(`${numero} * 1 =`,numero * 1)
    console.log(`${numero} * 2 =`,numero * 2)
    console.log(`${numero} * 3 =`,numero * 3)
    console.log(`${numero} * 4 =`,numero * 4)
    console.log(`${numero} * 5 =`,numero * 5)
    console.log(`${numero} * 6 =`,numero * 6)
    console.log(`${numero} * 7 =`,numero * 7)
    console.log(`${numero} * 8 =`,numero * 8)
    console.log(`${numero} * 9 =`,numero * 9)
    console.log(`${numero} * 10 =`,numero * 10)
}

tabuada(5)
tabuada(7)

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
// já realizei as letras a) e b) com todos os 3 formatos de função 



