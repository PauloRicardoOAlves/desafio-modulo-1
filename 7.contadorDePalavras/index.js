function contadorDePalavras(texto) {
    let separar = texto.split(" ")
    let semEspacosNoMeio = separar.filter((palavra) => palavra != '')
    console.log(semEspacosNoMeio.length)


}

contadorDePalavras(texto)