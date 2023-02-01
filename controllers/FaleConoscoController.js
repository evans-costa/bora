const db = require("../database/models");

function entrarEmContato(req, res) {

  console.log(req.body);
  res.render('faleConosco', { userLogged: req.session.userLogged });
}

async function faleConoscoCreate(req, res) {
  const { id } = req.params;
  const { message, full_name, email } = req.body;

  const faleConoscoContato = await db.Contact.create({
    full_name,
    message,
    email,
    fk_users: id
  });
  return res.json(faleConoscoContato);
}

module.exports = {
  entrarEmContato,
  faleConoscoCreate
};