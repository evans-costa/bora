const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { jwtKey } = require("../config/secrets.js");
const userModel = require("../models/userModel");

function validateUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("login", {
      errors: errors.mapped(),
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });
  }
  next();
}

const ifEmailExists = ((value, {req}) => {
  let userEmail = userModel.findUserByField(value = 'email', req.body.email)
  if(!userEmail) {
    return false
  } else return true
})

const isPasswordCorrect = ((value, {req}) => {
  let userLogin = userModel.findUserByField(value = 'email', req.body.email)
  let checkPassword = bcrypt.compareSync(req.body.password, userLogin.senha)
  if (!checkPassword) {
    return false
  } else return true
})


const inputValidation = [
  body("email")
    .notEmpty().withMessage("Digite seu email").bail()
    .isEmail().withMessage('Digite um email válido').bail()
    .custom(ifEmailExists).withMessage('Email não cadastrado'),
  body("password")
    .if(ifEmailExists).exists()
    .notEmpty().withMessage("Digite sua senha").bail()
    .isLength({ min: 8 }).withMessage("A senha precisa ter pelo menos 8 caracteres").bail()
    .custom(isPasswordCorrect).withMessage('Senha incorreta!'),
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
  validateToken,
};
