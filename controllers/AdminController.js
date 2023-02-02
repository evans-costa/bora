const database = require("../database/models");
const bcrypt = require("bcrypt");

const AdminController = {
  telaAdmin: (req, res) => {
    return res.send("Você está como admin");
  },

  logout: (req, res) => {
    res.clearCookie('token');
    return res.redirect('/login');
  },

  // CRUD EVENTOS
  telaListarEventos: async (req, res) => {
    const listaEventos = await database.Evento.findAll();
    return res.render('listaEventos', { eventos: listaEventos, userLogged: req.session.userLogged });
  },

  pesquisarEvento: async (req, res) => {
    const { key } = req.query;
    const listaEventos = await database.Evento.findAll({
      where: {
        nome_evento: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('nome_evento')), 'LIKE', '%' + `${key}`.toLowerCase() + '%')
      }
    });

    return res.render('editarEventos', { eventos: listaEventos, userLogged: req.session.userLogged });
  },

  telaEditarEvento: async (req, res) => {
    const { id } = req.params;
    const evento = await database.Evento.findOne({
      where: { id },
    });
    const findAllCategories = await database.Categoria.findAll();
    return res.render("atualizarEvento", { evento, categories: findAllCategories, userLogged: req.session.userLogged });
  },

  atualizarEventoPorId: async (req, res) => {
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
    return res.redirect("/admin/listareventos");
  },

  excluirEventoPorId: async (req, res) => {
    const { id } = req.params;
    await database.Evento.destroy({
      where: { id },
    });
    return res.redirect("/admin/listareventos");
  },

  // CRUD USUÁRIOS
  telaListarUsuarios: async (req, res) => {
    const user = await database.User.findAll();
    res.render("listaUsuarios", { user, userLogged: req.session.userLogged });
  },

  telaEditarUsuario: async (req, res) => {
    const { id } = req.params;
    const usuario = await database.User.findOne({
      where: { id }
    });
    res.render('atualizarUsuario', { usuario, userLogged: req.session.userLogged });
  },

  atualizarUsuarioPorId: async (req, res) => {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      email,
      telefone,
      cpf,
      dt_aniversario,
      genero,
      cep,
      numero,
      rua,
      cidade,
      estado,
      senha,
    } = req.body;

    await database.User.update({
      first_name,
      last_name,
      email,
      telefone,
      cpf,
      dt_aniversario,
      genero,
      cep,
      numero,
      rua,
      cidade,
      estado,
      senha: bcrypt.hashSync(senha, 10),
    },
      {
        where: {
          id,
        },
      });

    return res.redirect("/admin/listarusuarios");
  },

  excluirUsuarioPorId: async (req, res) => {
    const { id } = req.params;
    await database.User.destroy({
      where: {
        id,
      },
    });
    return res.redirect("/admin/listarusuarios");
  },


};

module.exports = AdminController;