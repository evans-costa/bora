function carregaDivCard() {
    document.getElementById("formulario-card").style.display="flex";
    document.getElementById("formulario-pix").style.display="none";
}

function carregaDivPix() {
    document.getElementById("formulario-pix").style.display="flex";
    document.getElementById("formulario-card").style.display="none";
    
}
//Máscara do CPF
const cpfUsuário = document.getElementById('cpf')

    cpfUsuário.addEventListener('keypress', () =>{
        let inputLength = cpf.value.length
        if (inputLength === 3 || inputLength === 7){
          cpf.value += '.'
        }

    if (inputLength === 11){
        cpf.value += '-'
    }
    
})

//Parcelamento
var totalCompra = document.getElementById('valor-compra').innerText
const campoParcelas = document.getElementById('quant-parcelas')
campoParcelas.addEventListener('click', () =>{
    for( var i=2; i<= 12; i++){
        var opcParc = document.createElement('option');
        opcParc.value = i;
        opcParc.innerHTML = i+'x de '+(totalCompra/i).toFixed(2) +' sem juros';
        campoParcelas.appendChild(opcParc)
    

    }
},{once:true})


//Máscara data cartão
const validadeCartao = document.getElementById('validadecartao')

    validadeCartao.addEventListener('keypress', () =>{
        let inputLength = validade-cartao.value.length
        if (inputLength === 3){
            validadecartao.value += '/'
          }

})

//Only Numbers function

function onlyNumbers(text) {  
    // Replace regex '/[^0-9]/g'
    text = text.replace(/[^0-9]/g, '');
    
    // Set to HTML
    cpfUsuário.value = text;
  }