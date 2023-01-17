const { body, validationResult } = require("express-validator");
const database = require("../database/models");

function validateCadastro (req, res) {
  const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.render("cadastro", {
			errors: errors.mapped(),
			oldData: req.body,
		});
	}
}

const cpfExist = async (value, { req }) => {
  const { cpf } = req.body
  const getCpf = await database.User.findOne({
    where: { cpf }
  });

  if (getCpf) throw new Error ("Este CPF já está cadastrado")
}

const emailExist = async (value, { req }) => {
  const { email } = req.body
  const getEmail = await database.User.findOne({
    where: { email }
  });

  if (getEmail) throw new Error ("Este e-mail já está cadastrado")
}

const inputValidation = [
    body("first_name").notEmpty()
      .withMessage("O nome não pode ficar vazio").bail().trim(),
    body("last_name").notEmpty()
      .withMessage("O sobrenome não pode ficar vazio").bail().trim(),
    body("telefone").notEmpty()
      .withMessage("Telefone obrigatório").bail().trim(),
    body("email")
      .notEmpty()
      .withMessage("O e-mail não pode ficar vazio").bail()
      .trim().bail()
      .normalizeEmail().bail()
      .isEmail().withMessage("Digite um e-mail válido")
      .custom(emailExist),
    body("cpf")
      .notEmpty()
      .withMessage("CPF obrigatório")
      .bail()
      .isLength({ min: 11 })
      .withMessage("Digite um CPF válido, mínimo 11 Dígitos").bail().trim()
      .custom(cpfExist),
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

module.exports = {
  inputValidation,
  validateCadastro,
}