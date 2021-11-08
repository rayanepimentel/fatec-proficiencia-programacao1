
let jogadas = [];

function game() {
  let jogador1 = parseInt(prompt("Digite de 0 - 5"))
  let jogador2 = parseInt(prompt("Digite de 0 - 5"))
  
  let soma = jogador1 + jogador2

  let resultadoDaRodada = soma % 2 === 0 ? "par" : "impar"
 
  jogadas.push(resultadoDaRodada)

  return jogadas
}

for(i = 1; i <= 5; i++){
  let chamandoJogadores = game() 
  let addJogadas = chamandoJogadores+1  
}

let counts = {}

jogadas.forEach(function(tipo) { counts[tipo] = (counts[tipo] || 0)+1; })

let quemGanhou = counts.par >= 3 ? `João venceu a disputa por ${counts.par} a ${counts.impar}` :  
`Maria venceu a disputa por ${counts.impar} a ${counts.par}`

alert(quemGanhou)
