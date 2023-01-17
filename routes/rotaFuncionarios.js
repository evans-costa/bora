const express = require("express");
const router = express.Router();
const FuncionarioController = require("../controllers/FuncionariosController");
const funcionarioMiddleware = require("../middlewares/funcionarioMiddleware")

router.get("/")

router.get("/cadastrar/tipocadastro/pj", FuncionarioController.cadastrarFuncionario);
router.post("/cadastrar/tipocadastro/pj", funcionarioMiddleware.inputValidationPj, funcionarioMiddleware.validateCadastroPj, FuncionarioController.createFuncionario);

module.exports = router