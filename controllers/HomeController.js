// const eventoModel = require('../models/evento')
const database = require("../database/models");

const HomeController = {
	index: async (req, res) => {
		const listaEventos = await database.Evento.findAll();
		res.render("index", { eventos: listaEventos });
	},
};

module.exports = HomeController;
