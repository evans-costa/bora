let formCadastro = document.getElementById("form-cadastro")

let menssageError = document.querySelector(".message-error");

let inputPrimeiroNome = document.getElementById("primeironome");
let labelPrimeiroNome = document.getElementById("labelPrimeiroNome");
let validPrimeiroNome = false;

let inputSobrenome = document.querySelector("#sobrenome");
let labelSobrenome = document.getElementById("labelSobrenome");
let validSobrenome = false;

let inputTelefone = document.getElementById("telefone");
let labelTelefone = document.getElementById("labelTelefone");
let validTelefone = false;

let inputEmail = document.getElementById("email");
let labelEmail = document.getElementById("labelEmail");
let validEmail = false;


let inputcpf = document.getElementById("cpf");
let labelcpf = document.getElementById("labelcpf");
let validcpf = false;


let inputAniversario = document.getElementById("aniversario");
let labelAniversario = document.getElementById("labelAniversario");


let inputRua = document.getElementById("rua");
let labelRua = document.getElementById("labelRua");
let validRua = false;

let inputNumero = document.getElementById("numero");
let labelNumero = document.getElementById("labelNumero");
let validNumero = false;

let inputCep = document.getElementById("cep");
let labelCep = document.getElementById("labelCep");
let validCep = false;

let inputCidade = document.getElementById("cidade");
let labelCidade = document.getElementById("labelCidade");
let validCidade = false;

let inputEstado = document.getElementById("estado");
let labelEstado = document.getElementById("labelEstado");
let validEstado = false;

let inputSenha = document.getElementById("senha");
let labelSenha = document.getElementById("labelSenha");
let validSenha = false;

let inputConfSenha = document.getElementById("confirmaSenha");
let labelConfSenha = document.getElementById("labelConfSenha");
let validConfSenha = false;
const error =[]

inputPrimeiroNome.addEventListener("input", () => {

    if (inputPrimeiroNome.value.length < 3 ) {
        labelPrimeiroNome.setAttribute('style', 'color: red');
        labelPrimeiroNome.innerHTML = 'Nome *Minimo 3 caracteres';
        inputPrimeiroNome.setAttribute('style', 'border-color: red');
        validPrimeiroNome = false;
        
        

        
    } else {
        labelPrimeiroNome.setAttribute('style', 'color: #03A64A');
        inputPrimeiroNome.setAttribute('style', 'border-color: #03A64A');
        labelPrimeiroNome.innerHTML = 'Nome'
        validPrimeiroNome = true;
        
    }
})


inputSobrenome.addEventListener("input", () => {
    if (inputSobrenome.value.length < 3 || inputSobrenome.focus() == "") {
        labelSobrenome.setAttribute('style', 'color: red');
        labelSobrenome.innerHTML = '*Minimo 3 caracteres';
        inputSobrenome.setAttribute('style', 'border-color: red');
        validSobrenome = false;
        
        
    } else {
        labelSobrenome.setAttribute('style', 'color: #03A64A');
        inputSobrenome.setAttribute('style', 'border-color: #03A64A');
        labelSobrenome.innerHTML = 'Sobrenome'
        validSobrenome = true;
        
    }
})

inputTelefone.addEventListener("input", () => {
    if (inputTelefone.value.length < 7) {
        labelTelefone.setAttribute('style', 'color: red');
        labelTelefone.innerHTML = '*Campo Obrigatório';
        inputTelefone.setAttribute('style', 'border-color: red');
        validTelefone = false;
        
        
    } else {
        labelTelefone.setAttribute('style', 'color: #03A64A');
        inputTelefone.setAttribute('style', 'border-color: #03A64A');
        labelTelefone.innerHTML = 'Telefone'
        validTelefone = true;
        
    }
})


inputEmail.addEventListener("input", () => {
    if (inputEmail.value.indexOf("@") == -1 || inputEmail.value.indexOf(".") == -1 ) {
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'Ex: email@me';
        inputEmail.setAttribute('style', 'border-color: red');
        validEmail = false
        
        
    } else {
        labelEmail.setAttribute('style', 'color: #03A64A');
        inputEmail.setAttribute('style', 'border-color: #03A64A');
        labelEmail.innerHTML = 'E-mail'
        validEmail = true;
       
    }
})

inputcpf.addEventListener("input", () => {
    if (inputcpf.value.length < 12) {
        labelcpf.setAttribute('style', 'color: red');
        labelcpf.innerHTML = 'CPF *Minimo 11 Digitos';
        inputcpf.setAttribute('style', 'border-color: red');
        validcpf = false
        
        
    } else {
        labelcpf.setAttribute('style', 'color: #03A64A');
        inputcpf.setAttribute('style', 'border-color: green');
        labelcpf.innerHTML = 'CPF'
        validcpf = true
        
    }
})




inputRua.addEventListener("input", () => {
    if (inputRua.value.length < 1) {
        labelRua.setAttribute('style', 'color: red');
        labelRua.setAttribute('style', 'border-color: red');
        validRua = false
        
       
    } else {
        labelRua.setAttribute('style', 'color: #03A64A');
        inputRua.setAttribute('style', 'border-color: #03A64A');
        validRua = true;
    }
})

inputNumero.addEventListener("input", () => {
    if (inputNumero.value.length < 2) {
        labelNumero.setAttribute('style', 'color: red');
        inputNumero.setAttribute('style', 'border-color: red');
        validNumero =false;
        
    } else {
        labelNumero.setAttribute('style', 'color: #03A64A');
        inputNumero.setAttribute('style', 'border-color: #03A64A');
        validNumero = true;
        
    }
})


inputCep.addEventListener("input", () => {
    if (inputCep.value.length < 5) {
        labelCep.setAttribute('style', 'color: red');
        
        inputCep.setAttribute('style', 'border-color: red');
        validCep = false
        
        
    } else {
        labelCep.setAttribute('style', 'color: #03A64A');
        inputCep.setAttribute('style', 'border-color: #03A64A');
        validCep = true;
    }
})

inputCidade.addEventListener("input", () => {
    if (inputCidade.value.length < 3) {
        labelCidade.setAttribute('style', 'color: red');
        inputCidade.setAttribute('style', 'border-color: red');
        validCidade = false
        
    } else {
        labelCidade.setAttribute('style', 'color: #03A64A');
        inputCidade.setAttribute('style', 'border-color: #03A64A');
        labelCidade.innerHTML = 'Cidade'
        validCidade = true;
       
        
    }
})

inputEstado.addEventListener("input", () => {
    if (inputEstado.value.length < 2) {
        labelEstado.setAttribute('style', 'color: red');
        labelEstado.innerHTML = 'Estado *Minimo 2 Caracteres';
        inputEstado.setAttribute('style', 'border-color: red');
        validEstado = false
        
        
    } else {
        labelEstado.setAttribute('style', 'color: #03A64A');
        inputEstado.setAttribute('style', 'border-color: #03A64A');
        labelEstado.innerHTML = 'Estado'
        validEstado = true
    
    }
})

inputSenha.addEventListener("input", () => {
    if (inputSenha.value.length < 6) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha *Minimo 6 Caracteres';
        inputSenha.setAttribute('style', 'border-color: red');
        validSenha = false
        
        
    } else {
        labelSenha.setAttribute('style', 'color: #03A64A');
        inputSenha.setAttribute('style', 'border-color: #03A64A');
        labelSenha.innerHTML = 'Senha'
        validSenha = true
        
    }
})

inputConfSenha.addEventListener("input", () => {
    if (inputSenha.value != inputConfSenha.value) {
        labelConfSenha.setAttribute('style', 'color: red');
        labelConfSenha.innerHTML = 'As senhas não conferem';
        inputConfSenha.setAttribute('style', 'border-color: red');
        validConfSenha = false
        
        
    } else {
        labelConfSenha.setAttribute('style', 'color: #03A64A');
        inputConfSenha.setAttribute('style', 'border-color: #03A64A');
        labelConfSenha.innerHTML = 'Senhas confere'
        validConfSenha = true
        
    }
})


formCadastro.addEventListener("submit",function cadastrar(event) {
    if (
        validPrimeiroNome && validSobrenome && validEmail && validEstado && validCidade && validCep && validRua  && validcpf && validSenha && validConfSenha && validNumero && validTelefone
    ) {
        console.log("eviar fomulario")
    }else {
        event.preventDefault()
        menssageError.style.display = "block"
        
    }

} );