function selecionarGoleiro(array) {
    let soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    posicao = soma % array.length
    if (posicao == 0) {
        console.log(array.length)
    } else {
        console.log(posicao)
    }
}

selecionarGoleiro(numeros)