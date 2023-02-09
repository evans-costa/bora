const database = require("../database/models");

const PagamentoController = {
  telaPagamento: (req, res) => {
    return res.render('telaPagamento', { userLogged: req.session.userLogged, carrinho: req.session.carrinho });
  },

  pedidoEvento: async (req, res) => {
    const carrinho = req.session.carrinho;
    const user = req.session.userLogged;

    console.log(carrinho);

    for (let evento of carrinho) {
      await database.PedidoEventos.create({
        evento_id: evento.id,
        pedido_id: carrinho.pedidoId,
        preco: evento.preco
      });
    }

    req.session.carrinho = [];
    return res.redirect(`/users/perfil/${user.id}`);
  }
};

module.exports = PagamentoController;
