const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");

const LoginController = {
  login: (req, res) => {
    return res.render("login", { errors: [], data: {} });
  },
  authenticateUser: (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign({ email }, jwtKey, { expiresIn: "8h" });
    res.cookie("token", token);
    return res.redirect("/");
  },
};

module.exports = LoginController;
