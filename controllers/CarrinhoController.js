const database = require('../database/models');

const CarrinhoController = {
  telaCarrinho: async (req, res) => {
    return res.render('carrinho', {
      userLogged: req.session.userLogged,
      carrinho: req.session.carrinho,
    });
  },

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

      return res.redirect('/carrinho');
    }

    const carrinho = [];
    carrinho.push(eventoCarrinho);

    req.session.carrinho = carrinho;

    return res.redirect('/carrinho');
  },

  excluirEvento: async (req, res) => {
    const { id } = req.params;

    if (req.session.carrinho) {
      const carrinho = req.session.carrinho;

      const index = carrinho.findIndex((item) => item.id == id);
      carrinho.splice(index, 1);

      if (carrinho.length === 0) {
        return res.redirect('/eventos');
      } else {
        return res.redirect('/carrinho');
      }
    }
  },
};

module.exports = CarrinhoController;
