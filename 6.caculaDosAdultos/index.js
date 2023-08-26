function filtrarMenores(array) {
    let todosMenores = array.every((pessoa) => pessoa < 18)
    if (todosMenores) {
        console.log("CRESCA E APARECA")
    } else {
        const podeEntrar = lista.filter((pessoa) => pessoa >= 18)
        console.log(Math.min(...podeEntrar))
    }
}

filtrarMenores(lista)