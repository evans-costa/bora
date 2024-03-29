const database = require("../database/models");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets.js");

function formLogin(req, res) {
  return res.render("login", { userLogged: req.session.userLogged, funcionarioLogged: req.session.funcionarioLogged });
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

module.exports = {
  formLogin,
  login,
};
