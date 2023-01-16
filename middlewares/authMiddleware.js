const { body, validationResult, cookie} = require("express-validator")
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets.js");
const bcrypt  = require('bcrypt');

const database = require("../database/models");

function validateUser (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("login", {
      errors: errors.mapped(),
      data: {
        email: req.body.email,
        password: req.body.password
      },
    });
  }
  next();
}

const checkEmailExists = async (value, { req }) => {
  const { email } = req.body
  const getUserEmail = await database.User.findOne({
    where: { email }
  });

  if (!getUserEmail) throw new Error ('Este e-mail não foi encontrado')
}

const checkPasswordIsCorrect = async (value, { req }) => {
  const { email } = req.body
  const senha = req.body.password
  const getUserEmail = await database.User.findOne({
    where: { email }
  });
  const decryptPassword = bcrypt.compareSync(senha, getUserEmail.senha)

  if (!decryptPassword) throw new Error ('Senha incorreta')
}

const inputValidation = [
  body("email")
    .notEmpty().withMessage("Digite seu email").bail()
    .isEmail().withMessage('Digite um email válido').bail()
    .custom(checkEmailExists).bail(),
  body("password")
    .notEmpty().withMessage("Digite sua senha").bail()
    .isLength({ min: 8 }).withMessage("A senha precisa ter pelo menos 8 caracteres").bail()
    .if(checkEmailExists)
    .custom(checkPasswordIsCorrect).bail(),
];

function validateToken(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res.redirect("/login");
  }
  try {
    const decoded = jwt.verify(token, jwtKey);
  } catch (error) {
    res.cookie("token", "");
    return res.redirect("/login");
  }
  next();
}

module.exports = {
  validateUser,
  inputValidation,
  validateToken
}
