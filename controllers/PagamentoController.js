const database = require("../database/models");

const PagamentoController = {
  telaPagamento: (req, res) => {
    return res.render('telaPagamento', { userLogged: req.session.userLogged, carrinho: req.session.carrinho });
  },

  pedidoEvento: async (req, res) => {
    const carrinho = req.session.carrinho;
    const user = req.session.userLogged;

    const pedido = await database.Pedidos.findOne({
      where: {
        user_id: user.id
      }
    });

    for (let evento of carrinho) {
      await database.PedidoEventos.create({
        evento_id: evento.id,
        pedido_id: pedido.id,
        preco: evento.preco
      });
    }

    req.session.carrinho = [];
    return res.redirect(`/users/perfil/${user.id}`);
  }
};

module.exports = PagamentoController;
