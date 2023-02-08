const database = require("../database/models");
const bcrypt = require("bcrypt");

const FuncionariosController = {
  telaFuncionarios: (req, res) => {
    return res.send("Olá Mundo");
  },

  cadastrarFuncionario: async (req, res) => {
    const findAllDepartments = await database.Departamento.findAll();
    return res.render("cadastrarFuncionario", { departamentos: findAllDepartments, userLogged: req.session.userLogged });
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
    return res.redirect("/");
  }


};

module.exports = FuncionariosController;