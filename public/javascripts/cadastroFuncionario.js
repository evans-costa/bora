const menuModal = document.getElementById("menu-modal");
const navIcon2 = document.querySelector("#nav-icon2");

navIcon2.addEventListener("click", () => {
  if (navIcon2.classList.toggle("open")) {
    menuModal.style.display = "block";
  } else {
    menuModal.style.display = "none";
  }
});

const formCadastro = document.getElementById("form-cadastro-cnpj");

const messageError = document.getElementsByClassName("error-msg");

const inputNome = document.getElementById("nome_completo");
const labelNome = document.getElementById("labelNomeFuncionario");
const validNome = false;

const inputEmail = document.getElementById("email_empresa");
const labelEmail = document.getElementById("labelEmailEmpresa");
const validEmail = false;

const inputCnpj = document.getElementById("cnpj");
const labelCnpj = document.getElementById("labelCnpj");
const validCnpj = false;

const inputCpf = document.getElementById("cpf");
const labelCpf = document.getElementById("labelCpf");
const validCpf = false;

const inputDepartamento = document.getElementById("departamentos");
const labelDepartamento = document.getElementById("labelDepartamento");
const validDepartamento = false

const inputCargo = document.getElementById("cargo");
const labelCargo = document.getElementById("labelCargo");
const validCargo = false

const inputSenha = document.getElementById("senha");
const labelSenha = document.getElementById("labelSenha");
const validSenha = false;

const inputConfSenha = document.getElementById("confirmaSenha");
const labelConfSenha = document.getElementById("labelConfSenha");
const validConfSenha = false;

const msgSenha = document.getElementById("regras-senha");

inputNome.addEventListener("blur", () => {
  if (inputNome.value == "") {
    labelNome.setAttribute("style", "color: rgb(179, 15, 59)");
    labelNome.innerHTML = "Nome completo obrigatório";
    inputNome.setAttribute(
      "style",
      "border: solid 1px  rgb(179, 15, 59)"
    );
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: #ffffff");
    inputNome.setAttribute("style", "border-color: #03A64A");
    errorMsg()
    validNome = true;
  }
});

function validarEmail(email) {
  const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  return validEmail.test(email);
}

inputEmail.addEventListener("input", () => {
  if (validarEmail(inputEmail.value) != true) {
    labelEmail.setAttribute("style", "color: rgb(179, 15, 59)");
    labelEmail.innerHTML = "Digite um email válido (exemplo: seuemail@email.com)";
    inputEmail.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validEmail = false;
  } else {
    labelEmail.setAttribute("style", "color: #FFFFFF");
    inputEmail.setAttribute("style", "border-color: #03A64A");
    labelEmail.innerHTML = "Email empresarial"
    validEmail = true;
  }
});

inputCnpj.addEventListener("input", () => {
  if (inputCnpj.value.length < 18) {
    labelCnpj.setAttribute("style", "color: rgb(179, 15, 59)");
    labelCnpj.innerHTML = "Insira um CNPJ válido";
    inputCnpj.setAttribute("style", "border: 1px solid rgb(179, 15, 59)");
    validCnpj = false;
  } else {
    labelCnpj.setAttribute("style", "color: #FFFFFF");
    inputCnpj.setAttribute("style", "border: solid 1px #03A64A");
    labelCnpj.innerHTML = "Número de CNPJ"
    validCnpj = true;
  }
});

inputCnpj.addEventListener("keypress", () => {
  const inputLength = cnpj.value.length;

  switch (inputLength) {
    case 2:
      cnpj.value += "."
      break
    case 6: 
      cnpj.value += "."
      break
    case 10: 
      cnpj.value += "/"
      break
    case 15: 
      cnpj.value += "-"
      break
  }
});

inputCpf.addEventListener("input", () => {
  if (inputCpf.value.length < 14) {
    labelCpf.setAttribute("style", "color: rgb(179, 15, 59)");
    labelCpf.innerHTML = "Insira um CPF válido";
    inputCpf.setAttribute("style", "border: 1px solid rgb(179, 15, 59)");
    validCpf = false;
  } else {
    labelCpf.setAttribute("style", "color: #FFFFFF");
    inputCpf.setAttribute("style", "border: solid 1px #03A64A");
    labelCpf.innerHTML = "Número de CPF";
    validCpf = true;
  }
});

inputCpf.addEventListener("keypress", () => {
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

inputCargo.addEventListener("blur", () => {
  if (inputCargo.value == "") {
    labelCargo.setAttribute("style", "color: rgb(179, 15, 59)");
    labelCargo.innerHTML = "Cargo obrigatório";
    inputCargo.setAttribute(
      "style",
      "border: solid 1px  rgb(179, 15, 59)"
    );
    validCargo = false;
  } else {
    labelCargo.setAttribute("style", "color: #ffffff");
    inputCargo.setAttribute("style", "border-color: #03A64A");
    labelCargo.innerHTML = "Cargo"
    validCargo = true;
    messageError.style.display = "none"
  }
});

inputDepartamento.addEventListener("blur", () => {
    if (inputDepartamento.value == 0) {
      labelDepartamento.setAttribute("style", "color: rgb(179, 15, 59)");
      labelDepartamento.innerHTML = "Departamento obrigatório";
      inputDepartamento.setAttribute(
        "style",
        "border: solid 1px  rgb(179, 15, 59)"
      );
      validDepartamento = false;
    } else {
      labelDepartamento.setAttribute("style", "color: #ffffff");
      inputDepartamento.setAttribute("style", "border-color: #03A64A");
      labelDepartamento.innerHTML = "Departamento"
      validDepartamento = true;
    }
});

function validarSenha(senha) {

  /* U  ma letra minúscula 
  Uma letra maiúscula
  Um caractere especial
  Um número especial
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

formCadastro.addEventListener("submit", function cadastrarFuncionario(event) {
  if (
    validNome &&
    validEmail &&
    validCnpj &&
    validCpf &&
    validDepartamento &&
    validCargo&&
    validSenha &&
    validConfSenha) {
  } else {
    messageError.style.display = "block";
    event.preventDefault();
  }
});
