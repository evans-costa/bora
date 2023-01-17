const { body, validationResult } = require("express-validator");
const database = require("../database/models");

async function validateCadastroPj (req, res, next) {
  const errors = validationResult(req);
  const findAllDepartments = await database.Departamento.findAll()
	if (!errors.isEmpty()) {
		return res.render("cadastrarFuncionario", {
			errors: errors.mapped(),
			oldData: req.body,
      departamentos: findAllDepartments
		});
	}
  next()
}

const cpfExist = async (value, { req }) => {
  const { cpf } = req.body
  const getCpf = await database.Funcionario.findOne({
    where: { cpf }
  });

  if (getCpf) throw new Error ("Este CPF já está cadastrado")
}

const cnpjExist = async (value, { req }) => {
  const { cnpj } = req.body
  const getCnpj = await database.Funcionario.findOne({
    where: { cnpj }
  });

  if (getCnpj) throw new Error ("Este CNPJ já está cadastrado")
}

const emailExist = async (value, { req }) => {
  const { email_empresa } = req.body
  const getEmail = await database.Funcionario.findOne({
    where: { email_empresa }
  });

  if (getEmail) throw new Error ("Este e-mail já está cadastrado")
}

const inputValidationPj = [
  body("nome_completo").notEmpty()
    .withMessage("O nome não pode ficar vazio").bail().trim(),
  body("email_empresa")
    .notEmpty()
    .withMessage("O e-mail não pode ficar vazio").bail()
    .trim().bail()
    .normalizeEmail().bail()
    .isEmail().withMessage("Digite um e-mail válido")
    .custom(emailExist).bail(),
  body("cnpj")
    .notEmpty()
    .withMessage("CNPJ obrigatório")
    .bail()
    .isLength({ min: 18 })
    .withMessage("Digite um CNPJ válido, mínimo 14 Dígitos").bail().trim()
    .custom(cnpjExist).bail(),
  body("dt_nascimento").notEmpty()
    .withMessage("Data de nascimento obrigatória").bail().trim(),
  body("cpf")
    .notEmpty()
    .withMessage("CPF obrigatório")
    .bail()
    .isLength({ min: 14 })
    .withMessage("Digite um CPF válido, mínimo 11 Dígitos").bail().trim()
    .custom(cpfExist).bail(),
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

module.exports = {
  inputValidationPj,
  validateCadastroPj
}