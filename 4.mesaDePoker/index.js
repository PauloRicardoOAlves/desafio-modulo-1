function solucao(min, max, valores) {
    
    function selecionarJogadores(min, max, valores) {
      const resultado = valores.filter((valor) => valor >= min && valor <= max )
      console.log(resultado)
  }
  
  selecionarJogadores(min, max, valores)
    
  }