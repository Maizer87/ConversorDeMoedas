function ConverterReal() {
    var valorEmDolarNumerico = parseFloat(document.getElementById("valor").value);
    var valorEmReal = (valorEmDolarNumerico * 5.02).toFixed(2);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = `O Resultado em Real é ${valorEmReal}`;
  }
  
  function ConverterBTC() {
    var valorEmDolarNumerico = parseFloat(document.getElementById("valor").value);
    var valorEmReal = (valorEmDolarNumerico * 0.00002716).toFixed(8);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = `O Resultado em BTC é ${valorEmReal}`;
  }
  