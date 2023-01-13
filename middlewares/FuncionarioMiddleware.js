const { body } = require("express-validator");

const validations = [
  body("nome_completo").notEmpty()
    .withMessage("O nome não pode ficar vazio").bail().trim(),
  body("email_empresa")
    .notEmpty()
    .withMessage("O e-mail não pode ficar vazio").bail()
    .trim().bail()
    .normalizeEmail().bail()
    .isEmail().withMessage("Digite um e-mail valido"),
  body("cnpj")
    .notEmpty()
    .withMessage("CNPJ obrigatório")
    .bail()
    .isLength({ min: 18 })
    .withMessage("Digite um CNPJ válido, mínimo 14 Dígitos").bail().trim(),
  body("dt_nascimento").notEmpty()
    .withMessage("Data de nascimento obrigatória").bail().trim(),
  body("cpf")
    .notEmpty()
    .withMessage("CPF obrigatório")
    .bail()
    .isLength({ min: 14 })
    .withMessage("Digite um CPF válido, mínimo 11 Dígitos").bail().trim(),
  body("dt_admissao").notEmpty()
    .withMessage("Data de admissão obrigatória").bail().trim(),
  body("departamento_id").notEmpty()
    .withMessage("Selecione o departamento"),
  body("cargo").notEmpty()
    .withMessage("O cargo não pode ficar vazio").bail().trim(),
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