const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets.js");

function validateUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("login", {
      errors: errors.array(),
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });
  }
  next();
}

const inputValidation = [
  body("email").isEmail().withMessage("Digite seu e-mail"),
  body("password")
    .notEmpty()
    .withMessage("Digite sua senha")
    .isLength({ min: 5 })
    .withMessage("A senha precisa ter pelo menos 5 caracteres"),
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
