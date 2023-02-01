const database = require("../database/models");

const PagamentoController = {
  telaPagamento: (req, res) => {
    return res.render('telaPagamento', { userLogged: req.session.userLogged, carrinho: req.session.carrinho });
  },

  criarPedido: async (req, res) => {
    const user = req.session.userLogged;
    const carrinho = req.session.carrinho;

    for (let evento of carrinho) {
      await database.UserEvento.create({
        evento_id: evento.id,
        user_id: user.id,
        data_pedido: Date.now()
      });
    }

    req.session.carrinho = [];
    return res.redirect(`/users/perfil/${user.id}`);
  }
};

module.exports = PagamentoController;
