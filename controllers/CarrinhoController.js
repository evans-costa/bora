const database = require('../database/models');

const CarrinhoController = {
  adicionarEvento: async (req, res) => {
    const { id } = req.params;

    const evento = await database.Evento.findOne({
      raw: true,
      where: { id },
    });

    const eventoCarrinho = {
      id: evento.id,
      nome: evento.nome_evento,
      preco: evento.preco_evento,
      imagem: evento.imagem_evento,
    };

    if (req.session.carrinho) {
      const carrinho = req.session.carrinho;
      carrinho.push(eventoCarrinho);

      req.session.carrinho = carrinho;
      console.log(req.session.carrinho);

      return res.redirect('/eventos');
    }

    const carrinho = [];
    carrinho.push(eventoCarrinho);

    req.session.carrinho = carrinho;
    console.log(req.session.carrinho);

    return res.redirect('/eventos');
  },
};

module.exports = CarrinhoController;
