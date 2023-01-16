const database = require("../database/models");

async function getAllUsers(req, res) {
  let user = await database.User.findAll();
  res.render("users", { user });
}

async function userUpdate(req, res) {
  let { id } = req.params;
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

  await database.User.update(
    {
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
    },
    {
      where: {
        id,
      },
    }
  );
  return res.redirect("/users");
}

module.exports = {
  getAllUsers,
  userUpdate,
};
