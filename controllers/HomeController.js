// const eventoModel = require('../models/evento')
const database = require('../database/models');

const HomeController = {
  index: async (req, res) => {
    const listaEventos = await database.Evento.findAll();
    return res.render('index', { eventos: listaEventos, userLogged: req.session.userLogged });
  },
};

module.exports = HomeController;
