const database = require("../database/models");

async function gerarPedido(req, res, next) {
  const user = req.session.userLogged;

  const formatDate = new Date(Date.now()).toLocaleString("pt-br");

  await database.Pedidos.create({
    user_id: user.id,
    data: formatDate
  });

  next();
};

module.exports = {
  gerarPedido
};