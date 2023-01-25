const database = require('../database/models');

const EventosController = {
  telaEventos: async (req, res) => {
    const listaEventos = await database.Evento.findAll();
    return res.render('eventos', { eventos: listaEventos, userLogged: req.session.userLogged });
  },

  eventoPorId: async (req, res) => {
    const { id } = req.params;
    const evento = await database.Evento.findOne({
      raw: true,
      where: { id },
    });

    return res.render('evento', { evento, userLogged: req.session.userLogged });
  },

  telaCadastroEvento: async (req, res) => {
    const findAllCategories = await database.Categoria.findAll();
    return res.render('cadastrarEvento', { categories: findAllCategories, userLogged: req.session.userLogged });
  },

  criarEvento: async (req, res) => {
    const { picture, title, description, date, price, category_id, home_highlight, carousel_highlight } = req.body;

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
    });

    return res.redirect('/');
  },
};

module.exports = EventosController;
