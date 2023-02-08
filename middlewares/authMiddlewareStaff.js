const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const database = require("../database/models");

function validateStaff(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("login", {
      errors: errors.mapped(),
      data: {
        email: req.body.email,
      },
      funcionarioLogged: req.session.funcionarioLogged
    });
  }
  next();
}

const checkEmailExists = async (value, { req }) => {
  const { email } = req.body;
  const getStaff = await database.Funcionario.findOne({
    where: { email_empresa: email }
  });

  if (!getStaff) throw new Error('Este e-mail não foi encontrado');
};

const checkPasswordIsCorrect = async (value, { req }) => {
  const { email } = req.body;
  const senha = req.body.password;
  const getStaff = await database.Funcionario.findOne({
    where: { email_empresa: email }
  });
  const decryptPassword = bcrypt.compareSync(senha, getStaff.senha);

  if (!decryptPassword) throw new Error('Senha incorreta');
};

const inputValidation = [
  body("email")
    .notEmpty().withMessage("Digite seu email").bail()
    .isEmail().withMessage('Digite um email válido').bail()
    .custom(checkEmailExists),
  body("password")
    .notEmpty().withMessage("Digite sua senha").bail()
    .isLength({ min: 8 }).withMessage("A senha precisa ter pelo menos 8 caracteres").bail()
    .if(checkEmailExists)
    .custom(checkPasswordIsCorrect),
];

module.exports = {
  validateStaff,
  inputValidation,
};
