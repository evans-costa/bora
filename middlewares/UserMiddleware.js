const { body } = require("express-validator");

const validations = [
    body("primeironome").notEmpty()
      .withMessage("O nome não pode ficar vazio").bail().trim(),
    body("sobrenome").notEmpty()
      .withMessage("O sobrenome não pode ficar vazio").bail().trim(),
    body("telefone").notEmpty()
      .withMessage("Telefone obrigatório").bail().trim(),
    body("email")
      .notEmpty()
      .withMessage("O E-mail não pode ficar vazio").bail()
      .trim().bail()
      .normalizeEmail().bail()
      .isEmail().withMessage("Digite um Email valido"),
    body("cpf")
      .notEmpty()
      .withMessage("CPF obrigatório")
      .bail()
      .isLength({ min: 11 })
      .withMessage("Digite um CPF Valido, Min 11 Dígitos").bail().trim(),
    body("aniversario").notEmpty()
      .withMessage("Data de aniversário obrigatório").bail().trim(),
    body("genero").notEmpty()
      .withMessage("Gênero não pode fica vazio").bail().trim(),
    body("cep").notEmpty()
      .withMessage("Informe o CEP").bail().trim(),
    body("numero").notEmpty()
      .withMessage("Número da residência obrigatório").bail().trim(),
    body("rua").notEmpty()
      .withMessage("Nome da Rua obrigatório").bail().trim(),
    body("cidade").notEmpty()
      .withMessage("Informe o Nome da Cidade").bail().trim(),
    body("estado").notEmpty()
      .withMessage("Informe o Estado").bail().trim(),
    body("senha")
      .notEmpty()
      .withMessage("Senha não pode ficar vazio")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Senha, Mínimo 8 Caracteres").bail().trim(),
    body('termos').notEmpty().withMessage('Você deve aceitar os Termos e condições do Programa BORA  e os Termos e Condições da conta BORA.'),
    body('politica').notEmpty().withMessage('Você deve aceitar a Política de Privacidade.'),
  ];

  module.exports = validations