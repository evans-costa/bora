const database = require("../database/models");
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const EventosController = {
	telaEventos : async (req, res) => {
		const listaEventos = await database.Evento.findAll();
		return res.render('eventos', { eventos: listaEventos });
	},
	
	eventoPorId: async (req, res) => {
		const { id } = req.params;
		const evento = await database.Evento.findOne({
			where: { id },
		});

		return res.render('evento', { evento }) 
	},

	telaCadastroEvento: async (req, res) => {
		const findAllCategories = await database.Categoria.findAll();
		return res.render("cadastrarEvento", { categories: findAllCategories });
	},

	criarEvento: async (req, res) => {
		const { picture, title, description, date, price, category_id, home_highlight, carousel_highlight} =
			req.body;
	
		let fileLocation = "";

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
			destaque_carrosel: carousel_highlight
		});

		return res.redirect("/");
	},

};

module.exports = EventosController;
