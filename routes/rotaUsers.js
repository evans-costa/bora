const express = require("express");
const router = express.Router();
const userMiddleware = require("../middlewares/userMiddleware");
const UsersController = require("../controllers/UsersController");
const loginAuthMiddleware = require("../middlewares/loginAuthMiddleware")

router.get("/cadastrar/tipocadastro", loginAuthMiddleware.logged, UsersController.tipoCadastro)

router.get("/cadastrar/tipocadastro/pf", loginAuthMiddleware.logged, UsersController.cadastrarUsuario);
router.post("/cadastrar/tipocadastro/pf", userMiddleware.inputValidationPf, userMiddleware.validateCadastroPf, UsersController.createUsers);

router.get("/perfil", loginAuthMiddleware.notLogged, UsersController.telaPerfil)

router.get("/sair", loginAuthMiddleware.notLogged, UsersController.logout)


module.exports = router;
