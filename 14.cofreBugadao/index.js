function processData(input) {
    //Enter your code here
    
    function tratarDados(entrada) {
    const linhas = entrada.trim().split('\n')
    return linhas

}

function conferirSenha() {
    const dados = tratarDados(input)
    senha = dados[0].trim()
    senhaDigitada = dados[1].trim()
    let conferir = ""
    let acertos = 0
    for (let i = 0; i < senhaDigitada.length; i++) {
        if (senhaDigitada[i] == senha[acertos]) {
            conferir += senha[acertos]
            acertos++
        }
    }
    if (conferir == senha) {
        console.log('SIM')
    } else {
        console.log('NAO')
    }
}

conferirSenha()
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});