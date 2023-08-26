function solucao(lista) {
    let contagem = 0
    let soma = 0
    
    for(const numero of lista){
        soma += numero
        contagem++
    }
    const resultado = soma / contagem
    console.log(resultado)
    }