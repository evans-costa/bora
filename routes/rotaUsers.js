const express = require("express");
const router = express.Router();
const userMiddleware = require("../middlewares/userMiddleware");
const UsersController = require("../controllers/UsersController");
const isLoggedMiddleware = require("../middlewares/isLoggedMiddleware");

router.get(
  "/cadastrar/tipocadastro",
  isLoggedMiddleware.logged,
  UsersController.tipoCadastro
);

router.get(
  "/cadastrar/tipocadastro/pf",
  isLoggedMiddleware.logged,
  UsersController.cadastrarUsuario
);

router.post(
  "/cadastrar/tipocadastro/pf",
  userMiddleware.inputValidationPf,
  userMiddleware.validateCadastroPf,
  UsersController.createUsers
);

router.get(
  "/perfil/:id",
  isLoggedMiddleware.notLogged,
  UsersController.telaPerfil
);
router.patch("/perfil/:id", isLoggedMiddleware.notLogged, UsersController.atualizarPerfil);
router.delete("/perfil/:id/excluir", isLoggedMiddleware.notLogged, UsersController.excluirPerfil);

router.get("/sair", isLoggedMiddleware.notLogged, UsersController.logout);

module.exports = router;
