const database = require("../database/models");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets.js");

function formLogin(req, res) {
  return res.render("login", { userLogged: req.session.userLogged });
}

async function login(req, res) {
  const { email } = req.body;
  const userToLogin = await database.User.findOne({
    raw: true,
    where: { email },
  });

  if (email === "admin@bora.com.br") {
    const token = jwt.sign({ email: email }, jwtKey, { expiresIn: "1d" });
    res.cookie("token", token);
    return res.redirect("/admin/listareventos");
  }

  delete userToLogin.senha;
  const carrinho = [];
  req.session.carrinho = carrinho;
  req.session.userLogged = userToLogin;
  return res.redirect(`/users/perfil/${userToLogin.id}`);
}

async function loginFuncionario(req, res) {
  const { email } = req.body;
  const staffToLogin = await database.Funcionario.findOne({
    raw: true,
    where: { email_empresa: email },
  });

  delete staffToLogin.senha;
  req.session.funcioarioLogged = staffToLogin;
  return res.redirect("/funcionarios");
}

module.exports = {
  formLogin,
  login,
  loginFuncionario
};
