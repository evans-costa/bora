const database = require("../database/models");

async function handleRoutes(req, res, next) {
  const { email } = req.body;

  const getFuncionario = await database.Funcionario.findOne({
    where: { email_empresa: email }
  });

  if (getFuncionario) {
    return res.redirect(307, "/funcionarios/login");
  }

  next();
}

module.exports = {
  handleRoutes
};