const database = require('../database/models');

const EventosController = {
  telaEventos: async (req, res) => {
    const listaEventos = await database.Evento.findAll();
    return res.render('eventos', {
      eventos: listaEventos,
      userLogged: req.session.userLogged,
      funcionarioLogged: req.session.funcionarioLogged,
      carrinho: req.session.carrinho,
    });
  },

  eventoPorId: async (req, res) => {
    const { id } = req.params;
    const evento = await database.Evento.findOne({
      where: { id },
    });

    return res.render('evento', { evento, userLogged: req.session.userLogged, funcionarioLogged: req.session.funcionarioLogged, carrinho: req.session.carrinho });
  },

  telaCadastroEvento: async (req, res) => {
    const findAllCategories = await database.Categoria.findAll();
    return res.render('cadastrarEvento', {
      categories: findAllCategories,
      funcionarioLogged: req.session.funcionarioLogged,
    });
  },

  criarEvento: async (req, res) => {
    const { picture, title, description, date, price, category_id, home_highlight, carousel_highlight } = req.body;
    const funcionario = req.session.funcionarioLogged;

    let fileLocation = '';

    if (req.file) {
      fileLocation = `/uploads/${req.file.filename}`;
    } else {
      fileLocation = picture;
    }

    await database.Evento.create({
      nome_evento: title,
      data_evento: date,
      preco_evento: price,
      descricao_event: description,
      fk_categoria: category_id,
      imagem_evento: fileLocation,
      destaque_home: home_highlight,
      destaque_carrosel: carousel_highlight,
      fk_funcionario: funcionario.id
    });

    return res.redirect('/');
  },
};

module.exports = EventosController;
