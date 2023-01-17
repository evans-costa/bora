const menuModal = document.getElementById("menu-modal");
const navIcon2 = document.querySelector("#nav-icon2");

navIcon2.addEventListener("click", () => {
  if (navIcon2.classList.toggle("open")) {
    menuModal.style.display = "block";
  } else {
    menuModal.style.display = "none";
  }
});

const formCadastroFunc = document.getElementById("form-cadastro-cnpj");

const messageErrorFunc = document.getElementsByClassName("error-msg");

const inputNome = document.getElementById("nome_completo");
const labelNome = document.getElementById("labelNomeFuncionario");
const validNome = false;

const inputEmailEmpresa = document.getElementById("email_empresa");
const labelEmailEmpresa = document.getElementById("labelEmailEmpresa");
const validEmailEmpresa = false;

const inputCnpj = document.getElementById("cnpj");
const labelCnpj = document.getElementById("labelCnpj");
const validCnpj = false;

const inputCpfFunc = document.getElementById("cpfFunc");
const labelCpfFunc = document.getElementById("labelCpfFunc");
const validCpfFunc = false;

const inputDepartamento = document.getElementById("departamentos");
const labelDepartamento = document.getElementById("labelDepartamento");
const validDepartamento = false

const inputCargo = document.getElementById("cargo");
const labelCargo = document.getElementById("labelCargo");
const validCargo = false

const inputSenhaFunc = document.getElementById("senha");
const labelSenhaFunc = document.getElementById("labelSenha");
const validSenhaFunc = false;

const inputConfSenhaFunc = document.getElementById("confirmaSenha");
const labelConfSenhaFunc = document.getElementById("labelConfSenha");
const validConfSenhaFunc = false;

const msgSenhaFunc = document.getElementById("regras-senha");

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

inputEmailEmpresa.addEventListener("input", () => {
  if (validarEmail(inputEmail.value) != true) {
    labelEmailEmpresa.setAttribute("style", "color: rgb(179, 15, 59)");
    labelEmailEmpresa.innerHTML = "Digite um email válido (exemplo: seuemail@email.com)";
    inputEmailEmpresa.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validEmailEmpresa = false;
  } else {
    labelEmailEmpresa.setAttribute("style", "color: #FFFFFF");
    inputEmailEmpresa.setAttribute("style", "border-color: #03A64A");
    labelEmailEmpresa.innerHTML = "Email empresarial"
    validEmailEmpresa = true;
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

inputCpfFunc.addEventListener("input", () => {
  if (inputCpfFunc.value.length < 14) {
    labelCpfFunc.setAttribute("style", "color: rgb(179, 15, 59)");
    labelCpfFunc.innerHTML = "Insira um CPF válido";
    inputCpfFunc.setAttribute("style", "border: 1px solid rgb(179, 15, 59)");
    validCpfFunc = false;
  } else {
    labelCpfFunc.setAttribute("style", "color: #FFFFFF");
    inputCpfFunc.setAttribute("style", "border: solid 1px #03A64A");
    labelCpfFunc.innerHTML = "Número de CPF";
    validCpfFunc = true;
  }
});

inputCpfFunc.addEventListener("keypress", () => {
  const inputLength = cpfFunc.value.length;
  if (inputLength === 3) {
    cpfFunc.value += ".";
  }
  if (inputLength === 7) {
    cpfFunc.value += ".";
  }
  if (inputLength === 11) {
    cpfFunc.value += "-";
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

  /* Uma letra minúscula 
  Uma letra maiúscula
  Um caractere especial
  Um número
  Pelo menos 8 caracteres */
  
  const forcaSenha =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  return forcaSenha.test(senha);
}

inputSenhaFunc.addEventListener("input", () => {
  if (validarSenha(inputSenhaFunc.value) != true) {
    labelSenhaFunc.setAttribute("style", "color: #ffffff");
    inputSenhaFunc.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    msgSenhaFunc.style.display = "block";
    validSenhaFunc = false;
  } else {
    labelSenhaFunc.setAttribute("style", "color: #ffffff");
    inputSenhaFunc.setAttribute("style", "border-color: #03A64A");
    msgSenhaFunc.style.display = "none";
    validSenhaFunc = true;
  }
});

inputConfSenhaFunc.addEventListener("input", () => {
  if (inputSenhaFunc.value != inputConfSenhaFunc.value) {
    labelConfSenhaFunc.setAttribute("style", "color: rgb(179, 15, 59)");
    labelConfSenhaFunc.innerHTML = "As senhas não conferem";
    inputConfSenhaFunc.setAttribute("style", "border: solid 1px rgb(179, 15, 59)");
    validConfSenhaFunc = false;
  } else {
    labelConfSenhaFunc.setAttribute("style", "color: ##ffffff");
    inputConfSenhaFunc.setAttribute("style", "border-color: #03A64A");
    labelConfSenhaFunc.innerHTML = "Senhas conferem";
    validConfSenhaFunc = true;
  }
});

formCadastroFunc.addEventListener("submit", function cadastrarFuncionario(event) {
  if (
    validNome &&
    validEmailEmpresa &&
    validCnpj &&
    validCpfFunc &&
    validDepartamento &&
    validCargo&&
    validSenhaFunc &&
    validConfSenhaFunc) {
  } else {
    messageErrorFunc.style.display = "block";
    event.preventDefault();
  }
});
