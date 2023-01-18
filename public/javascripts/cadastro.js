const menuModal = document.getElementById("menu-modal");
const navIcon2 = document.querySelector("#nav-icon2");

navIcon2.addEventListener("click", () => {
  if (navIcon2.classList.toggle("open")) {
    menuModal.style.display = "block";
  } else {
    menuModal.style.display = "none";
  }
});
// variaveis dos inputs e labels

const formCadastro = document.getElementById("form-cadastro");

const messageError = document.getElementsByClassName("error-msg");

const inputPrimeiroNome = document.getElementById("primeironome");
const labelPrimeiroNome = document.getElementById("labelPrimeiroNome");
const validPrimeiroNome = false;

const inputSobrenome = document.getElementById("sobrenome");
const labelSobrenome = document.getElementById("labelSobrenome");
const validSobrenome = false;

const inputTelefone = document.getElementById("telefone");
const labelTelefone = document.getElementById("labelTelefone");
const validTelefone = false;

const inputEmail = document.getElementById("email");
const labelEmail = document.getElementById("labelEmail");
const validEmail = false;

const inputcpf = document.getElementById("cpf");
const labelcpf = document.getElementById("labelcpf");
const validcpf = false;

const inputRua = document.getElementById("rua");
const labelRua = document.getElementById("labelRua");
const validRua = false;

const inputNumero = document.getElementById("numero");
const labelNumero = document.getElementById("labelNumero");
const validNumero = false;

const inputCep = document.getElementById("cep");
const labelCep = document.getElementById("labelCep");
const validCep = false;

const inputCidade = document.getElementById("cidade");
const labelCidade = document.getElementById("labelCidade");
const validCidade = false;

const inputEstado = document.getElementById("estado");
const labelEstado = document.getElementById("labelEstado");
const validEstado = false;

const inputSenha = document.getElementById("senha");
const labelSenha = document.getElementById("labelSenha");
const validSenha = false;

const inputConfSenha = document.getElementById("confirmaSenha");
const labelConfSenha = document.getElementById("labelConfSenha");
const validConfSenha = false;

const msgSenha = document.getElementById("regras-senha");

inputPrimeiroNome.addEventListener("blur", () => {
  if (inputPrimeiroNome.value == "") {
    labelPrimeiroNome.setAttribute("style", "color: rgb(179, 15, 59)");
    inputPrimeiroNome.setAttribute(
      "style",
      "border: solid 1px  rgb(179, 15, 59)"
    );
    validPrimeiroNome = false;
  } else {
    labelPrimeiroNome.setAttribute("style", "color: #ffffff");
    inputPrimeiroNome.setAttribute("style", "border-color: #03A64A");
    labelPrimeiroNome.innerHTML = "Nome";
    validPrimeiroNome = true;
  }
});

//função pra validar o sobrenome
inputSobrenome.addEventListener("blur", () => {
  if (inputSobrenome.value == "") {
    labelSobrenome.setAttribute("style", "color: rgb(179, 15, 59)");
    labelSobrenome.innerHTML = "Sobrenome obrigatório";
    inputSobrenome.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validSobrenome = false;
  } else {
    labelSobrenome.setAttribute("style", "color: #ffffff");
    inputSobrenome.setAttribute("style", "border-color: #03A64A");
    labelSobrenome.innerHTML = "Sobrenome";
    validSobrenome = true;
  }
});

inputTelefone.addEventListener("keypress", () => {
  const inputLength = telefone.value.length;
  if (inputLength === 0) {
    telefone.value += "(";
  }
  if (inputLength === 3) {
    telefone.value += ") ";
  }
  if (inputLength === 10) {
    telefone.value += "-";
  }
});

inputTelefone.addEventListener("input", () => {
  if (inputTelefone.value.length < 15) {
    labelTelefone.setAttribute("style", "color: rgb(179, 15, 59)");
    labelTelefone.innerHTML = "Telefone";
    inputTelefone.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validTelefone = false;
  } else {
    labelTelefone.setAttribute("style", "color: #FFFFFF");
    inputTelefone.setAttribute("style", "border-color: #03A64A");
    labelTelefone.innerHTML = "Telefone";
    validTelefone = true;
  }
});

function validarEmail(email) {
  const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  return validEmail.test(email);
}

inputEmail.addEventListener("input", () => {
  if (validarEmail(inputEmail.value) != true) {
    labelEmail.setAttribute("style", "color: rgb(179, 15, 59)");
    labelEmail.innerHTML = "ex:seuemail@email.com";
    inputEmail.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: #FFFFFF");
    inputEmail.setAttribute("style", "border-color: #03A64A");
    labelEmail.innerHTML = "E-mail";
    validEmail = true;
  }
});


inputcpf.addEventListener("input", () => {
  if (inputcpf.value.length < 14) {
    labelcpf.setAttribute("style", "color: rgb(179, 15, 59)");
    labelcpf.innerHTML = "Insira um CPF válido";
    inputcpf.setAttribute("style", "border: 1px solid rgb(179, 15, 59)");
    validcpf = false;
  } else {
    labelcpf.setAttribute("style", "color: #FFFFFF");
    inputcpf.setAttribute("style", "border: solid 1px #03A64A");
    labelcpf.innerHTML = "CPF";
    validcpf = true;
  }
});

inputcpf.addEventListener("keypress", () => {
  const inputLength = cpf.value.length;
  if (inputLength === 3) {
    cpf.value += ".";
  }
  if (inputLength === 7) {
    cpf.value += ".";
  }
  if (inputLength === 11) {
    cpf.value += "-";
  }
});

inputRua.addEventListener("input", () => {
  if (inputRua.value == "") {
    labelRua.setAttribute("style", "color: rgb(179, 15, 59)");
    labelRua.innerHTML = "Nome da rua obrigatório";
    inputRua.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validRua = false;
  } else {
    labelRua.setAttribute("style", "color: #FFFFFF");
    inputRua.setAttribute("style", "border-color: #03A64A");
    validRua = true;
  }
});

inputNumero.addEventListener("input", () => {
  if (inputNumero.value == "") {
    labelNumero.setAttribute("style", "color: rgb(179, 15, 59)");
    labelNumero.innerHTML = "Número obrigatório";
    inputNumero.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validNumero = false;
  } else {
    labelNumero.setAttribute("style", "color: #FFFFFF");
    inputNumero.setAttribute("style", "border-color: #03A64A");
    validNumero = true;
  }
});


inputCep.addEventListener("keypress", () => {
  const inputLength = cep.value.length;
  if (inputLength === 5) {
    cep.value += "-";
  }
});

inputCep.addEventListener("blur", (event) => {
  const cep = event.target.value;
	fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
		.then((response) => response.json())
		.then((data) => {
			inputRua.value = data.street;
			inputCidade.value = data.city;
			inputEstado.value = data.state;
		});

  if (inputCep.value == "") {
    labelCep.setAttribute("style", "color: rgb(179, 15, 59)");
    labelCep.innerHTML = "CEP obrigatório";
    inputCep.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validCep = false;
  } else {
    labelCep.setAttribute("style", "color: #FFFFFF");
    inputCep.setAttribute("style", "border-color: #03A64A");
    validCep = true;
  }
});

inputCidade.addEventListener("blur", () => {
  if (inputCidade.value == "") {
    labelCidade.setAttribute("style", "color: rgb(179, 15, 59)");
    labelCidade.innerHTML = "Cidade obrigatório";
    inputCidade.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validCidade = false;
  } else {
    labelCidade.setAttribute("style", "color: #FFFFFF");
    inputCidade.setAttribute("style", "border-color: #03A64A");
    labelCidade.innerHTML = "Cidade";
    validCidade = true;
  }
});

inputEstado.addEventListener("blur", () => {
  if (inputEstado.value == "" || inputEstado.value.length < 2) {
    labelEstado.setAttribute("style", "color: rgb(179, 15, 59)");
    labelEstado.innerHTML = "Estado - Máximo 2 Caracteres";
    inputEstado.setAttribute("style", "border:  solid 1px rgb(179, 15, 59)");
    validEstado = false;
  } else {
    labelEstado.setAttribute("style", "color: #FFFFFF");
    inputEstado.setAttribute("style", "border-color: #03A64A");
    labelEstado.innerHTML = "Estado";
    validEstado = true;
  }
});


function validarSenha(senha) {

  /* Uma constra minúscula 
  Uma constra maiúscula
  Um caractere especial
  Um número
  Pelo menos 8 caracteres */

  const forcaSenha =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  return forcaSenha.test(senha);
}

inputSenha.addEventListener("input", () => {
  if (validarSenha(inputSenha.value) != true) {
    labelSenha.setAttribute("style", "color: #ffffff");
    inputSenha.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    msgSenha.style.display = "block";
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: #ffffff");
    inputSenha.setAttribute("style", "border-color: #03A64A");
    msgSenha.style.display = "none";
    validSenha = true;
  }
});

inputConfSenha.addEventListener("input", () => {
  if (inputSenha.value != inputConfSenha.value) {
    labelConfSenha.setAttribute("style", "color: rgb(179, 15, 59)");
    labelConfSenha.innerHTML = "As senhas não conferem";
    inputConfSenha.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validConfSenha = false;
  } else {
    labelConfSenha.setAttribute("style", "color: ##ffffff");
    inputConfSenha.setAttribute("style", "border-color: #03A64A");
    labelConfSenha.innerHTML = "Senhas conferem";
    validConfSenha = true;
  }
});

formCadastro.addEventListener("submit", function cadastrar(event) {
  if (
    validPrimeiroNome &&
    validSobrenome &&
    validEmail &&
    validEstado &&
    validCidade &&
    validCep &&
    validRua &&
    validcpf &&
    validSenha &&
    validConfSenha &&
    validNumero &&
    validTelefone
  ) {
  } else {
    messageError.style.display = "block";
    event.preventDefault();
  }
});