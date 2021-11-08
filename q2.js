function calculo(ponto){
    let ponto1 = parseInt(prompt(`Digite o valor de ${ponto}1: `));
    let ponto2= parseInt(prompt(`Digite o valor de ${ponto}2: `));
    return Math.pow(ponto2 - ponto1, 2);
}

let pontoA = calculo('x');
let pontoB = calculo('y');

let distancia = Math.sqrt(pontoA + pontoB);
console.log(`Distância: ${distancia}`);