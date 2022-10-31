const userModel = require("../models/userModel");

//função que mostra a tela de cadastro
function cadastrar(req,res) {
    res.render('cadastro')
}

/*Função que cria um novo usuário, recebe uma função create do Model */
function createUsers(req, res) {
    //desestruturação de objeto
    const { primeironome,sobrenome,telefone, email,cpf,aniversario,genero,cep,numero,rua,cidade,estado,senha, confirmarSenha} = req.body;
    console.log(req.body)

    userModel.create(primeironome,sobrenome,telefone,email,cpf,aniversario,genero,cep,numero,rua,cidade,estado,senha, confirmarSenha);
    //redireciona para a Home
     res.redirect("/")
  }

  function editUser(req,res) {
    const {id} = req.params;
    const user = userModel.getById(id);
    return res.render("editUser", { user });
  }

module.exports = {
    cadastrar,
    createUsers,
    editUser,
}