// Desafio - Contando Casas

// No enunciado é pedido para essa função não receber paramêtros, mas não consegui prosseguir sem os mesmos.
function gerarNumeroAleatorio() {
    // min = Math.round(min)
    // max = Math.round(max)
   return Math.round(Math.random() * 20)
}


function verificarPalpite() {
    numeroAleatorio = gerarNumeroAleatorio()
    let tentativa = 1
    let palpite = parseInt(prompt("Digite um palpite de 1 a 20"))
    console.log(numeroAleatorio)
    while (palpite !== numeroAleatorio) {
        alert('Tente Novamente')
        tentativa++
        palpite = parseInt(prompt("Digite um palpite de 1 a 20"))
    }
    alert(`Voce acerto na tentativa ${tentativa}`)
}

verificarPalpite()