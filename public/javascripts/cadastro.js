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

let formCadastro = document.getElementById("form-cadastro");

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
const msgSenha = document.getElementById("msg-Senha");

//fun????o pra validar o primeiro nome
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

//fun????o pra validar o sobrenome
inputSobrenome.addEventListener("blur", () => {
	if (inputSobrenome.value == "") {
		labelSobrenome.setAttribute("style", "color: rgb(179, 15, 59)");
		labelSobrenome.innerHTML = "Sobrenome obrigat??rio";
		inputSobrenome.setAttribute(
			"style",
			"border: solid 1px rgb(179, 15, 59)"
		);
		validSobrenome = false;
	} else {
		labelSobrenome.setAttribute("style", "color: #ffffff");
		inputSobrenome.setAttribute("style", "border-color: #03A64A");
		labelSobrenome.innerHTML = "Sobrenome";
		validSobrenome = true;
	}
});
//fun????o pra validar o telefone
inputTelefone.addEventListener("input", () => {
	if (inputTelefone.value.length < 15) {
		labelTelefone.setAttribute("style", "color: rgb(179, 15, 59)");
		labelTelefone.innerHTML = "Telefone";
		inputTelefone.setAttribute(
			"style",
			"border: solid 1px rgb(179, 15, 59)"
		);
		validTelefone = false;
	} else {
		labelTelefone.setAttribute("style", "color: #FFFFFF");
		inputTelefone.setAttribute("style", "border-color: #03A64A");
		labelTelefone.innerHTML = "Telefone";
		validTelefone = true;
	}
});

function validarEmail(email) {
	let validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
	return validEmail.test(email);
}
//fun????o pra validar o Email
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
//fun????o pra validar o CPF
inputcpf.addEventListener("input", () => {
	if (inputcpf.value.length < 14) {
		labelcpf.setAttribute("style", "color: rgb(179, 15, 59)");
		labelcpf.innerHTML = "Insira um CPF v??lido";
		inputcpf.setAttribute("style", "border: 1px solid rgb(179, 15, 59)");
		validcpf = false;
	} else {
		labelcpf.setAttribute("style", "color: #FFFFFF");
		inputcpf.setAttribute("style", "border: solid 1px #03A64A");
		labelcpf.innerHTML = "CPF";
		validcpf = true;
	}
});

// fun????o pra validar o input rua
inputRua.addEventListener("input", () => {
	if (inputRua.value == "") {
		labelRua.setAttribute("style", "color: rgb(179, 15, 59)");
		labelRua.innerHTML = "Nome da rua obrigat??rio";
		inputRua.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
		validRua = false;
	} else {
		labelRua.setAttribute("style", "color: #FFFFFF");
		inputRua.setAttribute("style", "border-color: #03A64A");
		validRua = true;
	}
});

// fun????o do input Numero da rua

inputNumero.addEventListener("input", () => {
	if (inputNumero.value == "") {
		labelNumero.setAttribute("style", "color: rgb(179, 15, 59)");
		labelNumero.innerHTML = "N??mero obrigat??rio";
		inputNumero.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
		validNumero = false;
	} else {
		labelNumero.setAttribute("style", "color: #FFFFFF");
		inputNumero.setAttribute("style", "border-color: #03A64A");
		validNumero = true;
	}
});

//codigo para validar cep usando fetch

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
		labelCep.innerHTML = "CEP obrigat??rio";
		inputCep.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
		validCep = false;
	} else {
		labelCep.setAttribute("style", "color: #FFFFFF");
		inputCep.setAttribute("style", "border-color: #03A64A");
		validCep = true;
	}
});

// fun????o input cidade
inputCidade.addEventListener("blur", () => {
	if (inputCidade.value == "") {
		labelCidade.setAttribute("style", "color: rgb(179, 15, 59)");
		labelCidade.innerHTML = "Cidade obrigat??rio";
		inputCidade.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
		validCidade = false;
	} else {
		labelCidade.setAttribute("style", "color: #FFFFFF");
		inputCidade.setAttribute("style", "border-color: #03A64A");
		labelCidade.innerHTML = "Cidade";
		validCidade = true;
	}
});

// fun????o input estado
inputEstado.addEventListener("focus", () => {
	if (inputEstado.value == "") {
		labelEstado.setAttribute("style", "color: rgb(179, 15, 59)");
		labelEstado.innerHTML = "Estado *Minimo 2 Caracteres";
		inputEstado.setAttribute(
			"style",
			"border:  solid 1px rgb(179, 15, 59)"
		);
		validEstado = false;
	} else {
		labelEstado.setAttribute("style", "color: #FFFFFF");
		inputEstado.setAttribute("style", "border-color: #03A64A");
		labelEstado.innerHTML = "Estado";
		validEstado = true;
	}
});

// fun????o para validar for??a da senha
//usando o codigo do gato passando em cima do teclado

function validarSenha(senha) {
	let forcaSenha =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
	return forcaSenha.test(senha);
}

//A for??a da senha precisa ter no minimo
//uma letra minuscula
//uma letra maiuscula
//um Numero
//um Caracter especial
//no minimo 8 digitos

inputSenha.addEventListener("input", () => {
	if (validarSenha(inputSenha.value) != true) {
		labelSenha.setAttribute("style", "color: #ffffff");
		labelSenha.innerHTML = "Senha";
		inputSenha.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
		msgSenha.style.display = "block";
		validSenha = false;
	} else {
		labelSenha.setAttribute("style", "color: #ffffff");
		inputSenha.setAttribute("style", "border-color: #03A64A");
		labelSenha.innerHTML = "Senha";
		msgSenha.style.display = "none";
		validSenha = true;
	}
});

/*abaixo esta a fun????o para  validar a confirma????o da senha, precisa ser igual */
inputConfSenha.addEventListener("input", () => {
	if (inputSenha.value != inputConfSenha.value) {
		labelConfSenha.setAttribute("style", "color: rgb(179, 15, 59)");
		labelConfSenha.innerHTML = "As senhas n??o conferem";
		inputConfSenha.setAttribute(
			"style",
			"border: solid 1px rgb(179, 15, 59)"
		);
		validConfSenha = false;
	} else {
		labelConfSenha.setAttribute("style", "color: ##ffffff");
		inputConfSenha.setAttribute("style", "border-color: #03A64A");
		labelConfSenha.innerHTML = "Confirme a senha";
		validConfSenha = true;
	}
});

// fun????o que vai analizar se todos os campos foram preenchidos corretamente
//se algum campo n??o for preenchido,uma mensagem de erro aparece no topo do form
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
		//event.preventDefault();
		menssageError.style.display = "block";
	}
});

//M??scaras campos
inputCep.addEventListener("keypress", () => {
	let inputLength = cep.value.length;
	if (inputLength === 5) {
		cep.value += "-";
	}
});

inputTelefone.addEventListener("keypress", () => {
	let inputLength = telefone.value.length;
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

inputcpf.addEventListener("keypress", () => {
	let inputLength = cpf.value.length;
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
