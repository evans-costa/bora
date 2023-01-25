const database = require('../database/models');

const CarrinhoController = {
  telaCarrinho: async (req, res) => {
    const { id } = req.params;
    const eventoCart = await database.Evento.findOne({
      where: id,
    });

    return res.render('carrinho', { eventoCart });
  },

  cadastrarCarrinho: async (req, res) => {
    const { id } = await database.UserEvento.create({
      user_id: user,
      evento_id: evento,
    });

    return res.render('/carrinho');
  },
};

module.exports = CarrinhoController;
