const database = require("../database/models")
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

//função que mostra a tela de cadastro
function cadastrar(req,res) {
    res.render('cadastro')
}

/*Função que cria um novo usuário, recebe uma função create do Model */
async function createUsers (req, res) {
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

  const resultValid = validationResult(req)

  if (resultValid.errors.length > 0) {
      return res.render('cadastro', {
          errors: resultValid.mapped(),
          oldData: req.body
      })
  }
      
  let userExist = await database.User.findOne({
    where: {
      'email': req.body.email
    }
  })

  let cpfExist = await database.User.findOne({
    where: {
      'cpf': req.body.cpf
    }
  })

  if(userExist) {
    return res.render('cadastro',{
      errors: {
        email: {
        msg: 'Este email já esta cadastrado'
        }
      },
      oldData: req.body
    });
  }

  if(cpfExist) {
    return res.render('cadastro',{
      errors: {
        cpf: {
        msg: 'Este CPF já esta cadastrado'
        }
      },
      oldData: req.body
    });
  }

  createUsers = await database.User.create({
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
  })
  res.redirect("/")
}


module.exports = {
    cadastrar,
    createUsers,
}
