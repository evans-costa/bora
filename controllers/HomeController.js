const database = require('../database/models');

const HomeController = {
  index: async (req, res) => {
    const listaEventos = await database.Evento.findAll();
    return res.render('index', {
      eventos: listaEventos,
      userLogged: req.session.userLogged,
      carrinho: req.session.carrinho,
    });
  },
};

module.exports = HomeController;
