const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");
const modelAdmins = require('../models/admin')

const LoginController = {
  login: (req, res) => {
    return res.render("login", { errors: [], data: {} });
  },

  authenticateUser: (req, res) => {
    const { email, password } = req.body;
    const admins = modelAdmins.getAdmins()

    for (let admin of admins) {
      if (email === admin.email && password === admin.password) {
        const token = jwt.sign({ email }, jwtKey, { expiresIn: "8h" });
        res.cookie("token", token);
        return res.redirect("/");
      };
    };
    return res.redirect('/')
  },
};

module.exports = LoginController;