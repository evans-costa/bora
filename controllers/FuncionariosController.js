const database = require("../database/models");
const bcrypt = require("bcrypt");
const { Sequelize } = require('sequelize');

const FuncionariosController = {
  telaFuncionarios: (req, res) => {
    return res.send("Olá Mundo");
  },

  cadastrarFuncionario: async (req, res) => {
    const findAllDepartments = await database.Departamento.findAll();
    return res.render("cadastrarFuncionario", { departamentos: findAllDepartments, userLogged: req.session.userLogged, funcionarioLogged: req.session.funcionarioLogged });
  },

  createFuncionario: async (req, res) => {
    const { nome_completo, email_empresa, cnpj, dt_nascimento, cpf, dt_admissao, departamento_id, cargo, senha } = req.body;

    await database.Funcionario.create({
      nome_completo,
      email_empresa,
      cnpj,
      dt_nascimento,
      cpf,
      dt_admissao,
      fk_departamento: departamento_id,
      cargo,
      senha: bcrypt.hashSync(senha, 10)
    });

    res.redirect("/login");
  },

  loginFuncionario: async (req, res) => {
    const { email } = req.body;

    const staffToLogin = await database.Funcionario.findOne({
      raw: true,
      where: { email_empresa: email },
    });

    delete staffToLogin.senha;
    req.session.funcionarioLogged = staffToLogin;
    return res.redirect(`/funcionarios/${staffToLogin.id}/listareventos`);
  },

  logout: async (req, res) => {
    req.session.destroy((err) => {
      return res.redirect('/');
    });
  },

  telaListarEventos: async (req, res) => {
    const id = req.params.staffid;

    const listaEventos = await database.Evento.findAll({
      where: {
        fk_funcionario: id
      }
    });
    return res.render('listaEventosFuncionario', { eventos: listaEventos, funcionarioLogged: req.session.funcionarioLogged });
  },

  pesquisarEvento: async (req, res) => {
    const { key } = req.query;
    const id = req.params.staffid;
    const listaEventos = await database.Evento.findAll({
      where: {
        fk_funcionario: id,
        nome_evento: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('nome_evento')), 'LIKE', '%' + `${key}`.toLowerCase() + '%')
      }
    });

    return res.render('listaEventosFuncionario', { eventos: listaEventos, funcionarioLogged: req.session.funcionarioLogged });
  },

  telaEditarEvento: async (req, res) => {
    const { id } = req.params;

    const evento = await database.Evento.findOne({
      where: { id },
    });
    const findAllCategories = await database.Categoria.findAll();
    return res.render("atualizarEvento", { evento, categories: findAllCategories, funcionarioLogged: req.session.funcionarioLogged });
  },

  atualizarEventoPorId: async (req, res) => {
    const { id } = req.params;
    const { picture, title, description, date, price, category_id } =
      req.body;
    const staffId = req.params.staffid;

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
    return res.redirect(`/funcionarios/${staffId}/listareventos`);
  },

  excluirEventoPorId: async (req, res) => {
    const { id } = req.params;
    const staffId = req.params.staffid;
    await database.Evento.destroy({
      where: { id },
    });
    return res.redirect(`/funcionarios/${staffId}/listareventos`);
  },
};

module.exports = FuncionariosController;