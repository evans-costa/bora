const { body } = require("express-validator");

const validations = [
    body("first_name").notEmpty()
      .withMessage("O nome não pode ficar vazio").bail().trim(),
    body("last_name").notEmpty()
      .withMessage("O sobrenome não pode ficar vazio").bail().trim(),
    body("telefone").notEmpty()
      .withMessage("Telefone obrigatório").bail().trim(),
    body("email")
      .notEmpty()
      .withMessage("O email não pode ficar vazio").bail()
      .trim().bail()
      .normalizeEmail().bail()
      .isEmail().withMessage("Digite um email valido"),
    body("cpf")
      .notEmpty()
      .withMessage("CPF obrigatório")
      .bail()
      .isLength({ min: 11 })
      .withMessage("Digite um CPF válido, mínimo 11 Dígitos").bail().trim(),
    body("dt_aniversario").notEmpty()
      .withMessage("Data de aniversário obrigatória").bail().trim(),
    body("genero").notEmpty()
      .withMessage("Preencha seu gênero").bail().trim(),
    body("cep").notEmpty()
      .withMessage("Informe o seu CEP").bail().trim(),
    body("numero").notEmpty()
      .withMessage("Número da residência obrigatório").bail().trim(),
    body("rua").notEmpty()
      .withMessage("Nome da rua obrigatório").bail().trim(),
    body("cidade").notEmpty()
      .withMessage("Informe o nome da cidade").bail().trim(),
    body("estado").notEmpty()
      .withMessage("Informe o estado").bail().trim(),
    body("senha")
      .notEmpty()
      .withMessage("A senha não pode ficar vazia")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Senha deve ter no mínimo 8 caracteres").bail().trim(),
    body('termos').notEmpty().withMessage('Você deve aceitar os Termos e condições do Programa BORA e os Termos e Condições da conta BORA.'),
    body('politica').notEmpty().withMessage('Você deve aceitar a Política de Privacidade.'),
  ];

  module.exports = validations