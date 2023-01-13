const express = require("express");
const router = express.Router();
const FuncionarioController = require("../controllers/FuncionariosController");
const FuncionarioMiddleware = require("../middlewares/FuncionarioMiddleware")

router.get("/")

router.get("/cadastrar/tipocadastro/pj", FuncionarioController.cadastrarFuncionario);
router.post("/cadastrar/tipocadastro/pj", FuncionarioMiddleware, FuncionarioController.createFuncionario);

module.exports = router