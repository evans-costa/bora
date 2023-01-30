const database = require('../database/models');
const bcrypt = require('bcrypt');

function tipoCadastro(req, res) {
  res.render('tipoCadastro', { userLogged: req.session.userLogged });
}

function cadastrarUsuario(req, res) {
  res.render('cadastrarUsuario', { userLogged: req.session.userLogged });
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

  return res.redirect('/');
}

function telaPerfil(req, res) {
  return res.render('perfilUsuario', { userLogged: req.session.userLogged, carrinho: req.session.carrinho });
}

async function atualizarPerfil(req, res) {
  const id = req.params.id;
  const { first_name, last_name, email, telefone, dt_aniversario, genero, cidade, estado } = req.body;

  await database.User.update(
    {
      first_name,
      last_name,
      email,
      telefone,
      dt_aniversario,
      genero,
      cidade,
      estado,
    },
    {
      where: {
        id: id,
      },
    }
  );

  req.session.destroy((err) => {
    return res.redirect('/login');
  });
}

async function excluirPerfil(req, res) {
  const { id } = req.params;
  await database.User.destroy({
    where: {
      id,
    },
  });

  req.session.destroy((err) => {
    return res.redirect('/');
  });
}

function logout(req, res) {
  req.session.destroy((err) => {
    return res.redirect('/');
  });
}

module.exports = {
  cadastrarUsuario,
  tipoCadastro,
  createUsers,
  telaPerfil,
  atualizarPerfil,
  excluirPerfil,
  logout,
};
