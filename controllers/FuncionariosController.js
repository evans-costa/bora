const database = require("../database/models");
const bcrypt = require("bcrypt");

const FuncioariosController = {
  cadastrarFuncionario: async (req, res) => {
    const findAllDepartments = await database.Departamento.findAll()
    return res.render("cadastrarFuncionario", { departamentos: findAllDepartments});
  },

  createFuncionario: async (req, res) => {
    const { nome_completo, email_empresa, cnpj, dt_nascimento, cpf, dt_admissao, departamento_id, cargo, senha } = req.body

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
}

module.exports = FuncioariosController