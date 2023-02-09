const database = require("../database/models");

async function gerarPedido(req, res, next) {
  const carrinho = req.session.carrinho;
  const user = req.session.userLogged;

  const formatDate = new Date(Date.now()).toLocaleString("pt-br");

  const pedido = await database.Pedidos.create({
    user_id: user.id,
    data: formatDate
  });

  carrinho.pedidoId = pedido.id;
  next();
};

module.exports = {
  gerarPedido
};