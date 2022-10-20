// Desafio - Contando Casas

// No enunciado é pedido para essa função não receber paramêtros, mas não consegui prosseguir sem os mesmos.
function gerarNumeroAleatorio(min ,max) {
    min = Math.round(min)
    max = Math.round(max)
   return Math.round(Math.random() * (max) + min)
}


function verificarPalpite() {
    numeroAleatorio = gerarNumeroAleatorio(1, 20)
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