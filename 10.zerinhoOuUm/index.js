function procurarVencedor(array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i].jogada
    }
    if (soma == 1) {
        const vencedor = array.filter((jogador) => jogador.jogada == 1)
        console.log(vencedor[0].nome)
    } else if (soma == array.length - 1) {
        const vencedor = array.filter((jogador) => jogador.jogada == 0)
        console.log(vencedor[0].nome)
    } else {
    console.log('NINGUEM')
}
}

procurarVencedor(jogadores)