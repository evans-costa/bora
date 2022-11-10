const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets.js");
const userModel = require("../models/userModel");

function validateUser(req, res, next) {
  const errors = validationResult(req);
  console.log(errors)
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
  value = 'email'
  let userEmail = userModel.findUserByField(value, req.body.email)
  if(!userEmail) {
    return false
  } else return true
})


const inputValidation = [
  body("email")
    .notEmpty().withMessage("Digite seu email").bail()
    .isEmail().withMessage('Digite um email válido').bail()
    .custom(ifEmailExists).withMessage('Email não cadastrado'),
  body("password")
    .notEmpty()
    .withMessage("Digite sua senha")
    .isLength({ min: 8 })
    .withMessage("A senha precisa ter pelo menos 8 caracteres"),
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
