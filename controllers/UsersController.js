const database = require("../database/models");
const bcrypt = require("bcrypt");

function tipoCadastro (req, res) {
	res.render("tipoCadastro", { userLogged: req.session.userLogged });
}

function cadastrarUsuario(req, res) {
  res.render("cadastrarUsuario", { userLogged: req.session.userLogged });
}

async function createUsers(req, res) {
  const {
    first_name,
    last_name,
    email,
    telefone,
    cpf,
    dt_aniversario,
    genero,
    cep,
    numero,
    rua,
    cidade,
    estado,
    senha,
  } = req.body;

	createUsers = await database.User.create({
		first_name,
		last_name,
		email,
		telefone,
		cpf,
		dt_aniversario,
		genero,
		cep,
		numero,
		rua,
		cidade,
		estado,
		senha: bcrypt.hashSync(senha, 10),
	});

	return res.redirect("/");
}

function telaPerfil (req, res) {
  return res.render("perfilUsuario", { userLogged: req.session.userLogged})
}

function logout (req, res) {
  req.session.destroy((err) => {
    return res.redirect('/login')
  });
}

module.exports = {
	cadastrarUsuario,
	tipoCadastro,
	createUsers,
  telaPerfil,
  logout
};
