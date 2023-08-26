function processData(input) {
    //Enter your code here
    
    function tratarDados(dados) {
    const linhas = input.trim().split("\n")
    const n = parseInt(linhas[0])

    let coordenadas = []
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ")
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })
    } return coordenadas
}

function calcularDistancia() {
    pontos = tratarDados(input)
    let maior = 0
    for (let i = 0; i < pontos.length; i++) {
        for (let j = i + 1; j < pontos.length; j++) {
            let x = pontos[j].x - pontos[i].x
            let y = pontos[j].y - pontos[i].y
            let resultado = Math.sqrt((x * x) + (y * y))
            if (resultado > maior) {
                maior = resultado
            }
        }

    }
    console.log(maior)
}
calcularDistancia()
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
