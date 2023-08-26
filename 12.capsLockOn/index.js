function processData(input) {
    //Enter your code here
    function transformarPalava(palavra) {
    let primeiraLetra = palavra.slice(0, 1)
    let restoDaPalavra = palavra.slice(1)
    if (primeiraLetra == primeiraLetra.toLowerCase() && restoDaPalavra == restoDaPalavra.toUpperCase()) {
        console.log(primeiraLetra.toUpperCase() + restoDaPalavra.toLowerCase())
    } else if (palavra == palavra.toLowerCase()) {
        console.log(palavra)
    } else if(primeiraLetra === primeiraLetra.toUpperCase() && restoDaPalavra === restoDaPalavra.toUpperCase()){
        console.log(palavra.toLowerCase())
    } else{
        console.log(palavra)
    }
}

transformarPalava(input)
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