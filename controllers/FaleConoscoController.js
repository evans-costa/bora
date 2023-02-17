const db = require("../database/models");

function entrarEmContato(req, res) {
  res.render('faleConosco', { userLogged: req.session.userLogged, funcionarioLogged: req.session.funcionarioLogged, carrinho: req.session.carrinho });
}

async function faleConoscoCreate(req, res) {
  const { id } = req.params;
  const { message, full_name, email } = req.body;

  await db.Contact.create({
    full_name,
    message,
    email,
    fk_user: id
  });

  return res.redirect('/');
}

module.exports = {
  entrarEmContato,
  faleConoscoCreate
};