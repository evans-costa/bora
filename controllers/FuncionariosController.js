const database = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

//função que mostra a tela de cadastro
const FuncioariosController = {
  cadastrarFuncionario: async (req, res) => {
    const findAllDepartments = await database.Departamento.findAll()
    return res.render("cadastrarFuncionario", { departamentos: findAllDepartments});
  },

  createFuncionario: async (req, res) => {
    const { nome_completo, email_empresa, cnpj, dt_nascimento, cpf, dt_admissao, departamento_id, cargo, senha } = req.body

    const resultValid = validationResult(req)

    if (resultValid.errors.length > 0) {
      return res.render("cadastrarFuncionario", {
        errors: resultValid.mapped(),
        oldData: req.body,
      });
    }
  
    const funcionarioExist = await database.Funcionario.findOne({
      where: {
        email_empresa: req.body.email_empresa
      },
    });
  
    const cnpjExist = await database.Funcionario.findOne({
      where: {
        cnpj: req.body.cnpj,
      },
    });

    const cpfExist = await database.Funcionario.findOne({
      where: {
        cpf: req.body.cpf,
      },
    });
  
    if (funcionarioExist) {
      return res.render("cadastrarFuncionario", {
        errors: {
          email_empresa: {
            msg: "Este e-mail já está cadastrado!",
          },
        },
        oldData: req.body,
      });
    };
  
    if (cnpjExist) {
      return res.render("cadastrarFuncionario", {
        errors: {
          cnpj: {
            msg: "Este CNPJ já está cadastrado!",
          },
        },
        oldData: req.body,
      });
    };

    if (cpfExist) {
      return res.render("cadastrarFuncionario", {
        errors: {
          cpf: {
            msg: "Este CPF já está cadastrado!",
          },
        },
        oldData: req.body,
      });
    };

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