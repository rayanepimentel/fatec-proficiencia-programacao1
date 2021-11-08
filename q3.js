
let veiculo = "Ônibus";
let informarGenero = "Feminino";
let informarIdade = 20;

let genero = informarGenero == "Feminino" ? true : false;

switch (veiculo) {
    case 'Passeio':
        veiculo = 5
        break;
    case 'Van' || 'Ônibus':
        veiculo = 3
        break;
    case "Unitário":
        veiculo = 5
        break;
    default:
        veiculo = 2
        break;
}

if (genero == true && informarIdade <= 30) {
    valorIdadeEGenero = 3;
} else if (genero == true && informarIdade > 30) {
    valorIdadeEGenero = 0;
} else if (genero == false && informarIdade <= 30) {
    valorIdadeEGenero = 5;
} else {
    valorIdadeEGenero = 1;
}

function calcularSeguro(valorDoSeguro, veiculo, valorIdadeEGenero) {
    let veiculoPorcentagem = (veiculo * valor) / 100;
    let generoIdadePorcentagem = (valorIdadeEGenero * valor) / 100;
    let valorTotal = valor + veiculoPorcentagem + generoIdadePorcentagem;

    return valorTotal;
};

console.log(calcularSeguro(180, veiculo, valorIdadeEGenero));
