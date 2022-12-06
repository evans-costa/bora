const jwt = require("jsonwebtoken");
const { jwtKey } = require("../config/secrets");
const database = require("../database/models");

const LoginController = {
	login: (req, res) => {
		return res.render("login", { errors: [], data: {} });
	},

	authenticateUser: async (req, res) => {
		const { email, password } = req.body;
		const admins = await database.User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (admins) {
			let userPassword = admins.senha;
			if (userPassword === password) {
				const token = jwt.sign({ email }, jwtKey, { expiresIn: "8h" });
				res.cookie("token", token);
				return res.redirect("/");
			}
		}
		return res.redirect("/");
	},
};

module.exports = LoginController;
