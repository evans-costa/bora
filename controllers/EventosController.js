const database = require("../database/models");
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const EventosController = {
	telaEventos : async (req, res) => {
		const listaEventos = await database.Evento.findAll();
		return res.render('listaEventos', { eventos: listaEventos });
	},
	
	eventoPorId: async (req, res) => {
		const { id } = req.params;
		const evento = await database.Evento.findOne({
			where: { id },
		});

		return res.render('evento', { evento }) 
	},

	telaListarEventos: async (req, res) => {
		const listaEventos = await database.Evento.findAll();
		return res.render('editarEventos', { eventos: listaEventos });
	},

	pesquisarEvento: async (req, res) => {
		const { key } = req.query
		const listaEventos = await database.Evento.findAll({
			where: {
				nome_evento: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('nome_evento')), 'LIKE', '%' + `${key}`.toLowerCase() + '%')
			}
		});

		return res.render('editarEventos', { eventos: listaEventos})
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

	

	telaEditarEvento: async (req, res) => {
		const { id } = req.params;
		const evento = await database.Evento.findOne({
			where: { id },
		});
		const findAllCategories = await database.Categoria.findAll();
		return res.render("atualizarEvento", { evento, categories: findAllCategories });
	},

	atualizarPorId: async (req, res) => {
		const { id } = req.params;
		const { picture, title, description, date, price, category_id } =
			req.body;

		let fileLocation = "";

		if (req.file) {
			fileLocation = `/uploads/${req.file.filename}`;
		} else {
			fileLocation = picture;
		}

		await database.Evento.update(
			{
				nome_evento: title,
				data_evento: date,
				preco_evento: price,
				descricao_event: description,
				fk_categoria: category_id,
				imagem_evento: fileLocation,
			},
			{
				where: { id },
			}
		);
		return res.redirect("/");
	},

	excluirPorId: async (req, res) => {
		const { id } = req.params;
		await database.Evento.destroy({
			where: { id },
		});
		return res.redirect("/eventos/listareventos");
	},
};

module.exports = EventosController;
