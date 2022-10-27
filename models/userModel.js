const fs = require("fs");
//função construtora
function Register(
  primeironome,
  sobrenome,
  telefone,
  email,
  cpf,
  aniversario,
  genero,
  cep,
  numero,
  rua,
  cidade,
  estado,
  senha,
  confirmarSenha
) {
  this.primeironome = primeironome;
  this.sobrenome = sobrenome;
  this.telefone = telefone;
  this.email = email;
  this.cpf = cpf;
  this.aniversario = aniversario;
  this.genero = genero;
  this.cep = cep;
  this.numero = numero;
  this.rua = rua;
  this.cidade = cidade;
  this.estado = estado;
  this.senha = senha;
  this.confirmarSenha = confirmarSenha;
}

function getAll() {
  /*função que recebe todos usuário que estão no banco de dados
    (database/register.json) */
  const createUsers = JSON.parse(
    fs.readFileSync("database/register.json", "utf-8")
  );
  return createUsers.map(
    (register) =>
      new Register(
        register.primeironome,
        register.sobrenome,
        register.telefone,
        register.email,
        register.cpf,
        register.aniversario,
        register.genero,
        register.cep,
        register.numero,
        register.rua,
        register.cidade,
        register.estado,
        register.senha,
        register.confirmarSenha
      )
  );
}

/*Função que vai criar um novo objeto */
function create(
  primeironome,
  sobrenome,
  telefone,
  email,
  cpf,
  aniversario,
  genero,
  cep,
  numero,
  rua,
  cidade,
  estado,
  senha,
  confirmarSenha
) {
  const newUser = new Register(
    primeironome,
    sobrenome,
    telefone,
    email,
    cpf,
    aniversario,
    genero,
    cep,
    numero,
    rua,
    cidade,
    estado,
    senha,
    confirmarSenha
  );

  const usersList = getAll();
  usersList.push(newUser);
  //usando o writeFileSync para cadastrar dentro do arquivo register.json
  fs.writeFileSync("database/register.json", JSON.stringify(usersList));
}

//função para editar usuário 
function getById(id) {
    const users = getAll();
    return users[id]
  }


module.exports = {
  create,
  getAll,
  getById,
};
