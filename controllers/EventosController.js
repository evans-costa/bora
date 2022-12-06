const database = require("../database/models");

const EventosController = {
	telaEventos: (req, res) => {
		return res.render("eventos");
	},

	telaCadastroEvento: async (req, res) => {
		let findAllCategories = await database.Categoria.findAll();
		return res.render("cadastrarEvento", { categories: findAllCategories });
	},

	criarEvento: async (req, res) => {
		const { picture, title, description, date, price, category_id } =
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
		});

		return res.redirect("/");
	},

	telaEditarEvento: async (req, res) => {
		const { id } = req.params;
		const evento = await database.Evento.findOne({
			where: { id },
		});
		return res.render("atualizarEvento", { evento });
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
		return res.redirect("/");
	},
};

module.exports = EventosController;
