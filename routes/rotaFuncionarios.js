const express = require("express");
const router = express.Router();
const FuncionariosController = require("../controllers/FuncionariosController");
const funcionarioMiddleware = require("../middlewares/funcionarioMiddleware");
const authStaffMiddleware = require("../middlewares/authMiddlewareStaff");

router.get("/", FuncionariosController.telaFuncionarios);

router.post("/login",
  authStaffMiddleware.inputValidation,
  authStaffMiddleware.validateStaff,
  FuncionariosController.loginFuncionario);

router.get("/cadastrar/tipocadastro/pj", FuncionariosController.cadastrarFuncionario);
router.post("/cadastrar/tipocadastro/pj", funcionarioMiddleware.inputValidationPj, funcionarioMiddleware.validateCadastroPj, FuncionariosController.createFuncionario);

module.exports = router;