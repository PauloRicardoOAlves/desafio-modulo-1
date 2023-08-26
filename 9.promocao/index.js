function promocao(array) {
    array.sort((primeiro, segundo) => primeiro - segundo)
    if (array.length >= 3) {
        const menor = array.shift()
        const menorPromocao = menor / 2
        array.unshift(menorPromocao)
        const totalAPagar = array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
        console.log(totalAPagar)
    } else {
        const totalAPagar = array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
        console.log(totalAPagar)
    }

}

promocao(precos)