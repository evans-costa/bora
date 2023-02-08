const express = require("express");
const router = express.Router();
const multerUpload = require("../config/multer");
const FuncionariosController = require("../controllers/FuncionariosController");
const funcionarioMiddleware = require("../middlewares/funcionarioMiddleware");
const authStaffMiddleware = require("../middlewares/authMiddlewareStaff");
const staffLoggedMiddleware = require("../middlewares/staffLoggedMiddleware");

router.get("/", staffLoggedMiddleware.notLogged, FuncionariosController.telaFuncionarios);

router.post("/login",
  authStaffMiddleware.inputValidation,
  authStaffMiddleware.validateStaff,
  FuncionariosController.loginFuncionario
);
router.get("/sair", staffLoggedMiddleware.notLogged, FuncionariosController.logout);

router.get("/:staffid/listareventos", staffLoggedMiddleware.notLogged, FuncionariosController.telaListarEventos);
router.get("/:staffid/listareventos/pesquisar", staffLoggedMiddleware.notLogged, FuncionariosController.pesquisarEvento);

router.get(
  "/:staffid/evento/:id/editarevento",
  staffLoggedMiddleware.notLogged,
  FuncionariosController.telaEditarEvento
);


router.put(
  "/:staffid/evento/:id/editarevento",
  staffLoggedMiddleware.notLogged,
  multerUpload.single("file"),
  FuncionariosController.atualizarEventoPorId
);
router.delete(
  "/:staffid/evento/:id/deletarevento",
  staffLoggedMiddleware.notLogged,
  FuncionariosController.excluirEventoPorId
);

router.get("/cadastrar/tipocadastro/pj", staffLoggedMiddleware.logged, FuncionariosController.cadastrarFuncionario);
router.post("/cadastrar/tipocadastro/pj", funcionarioMiddleware.inputValidationPj, funcionarioMiddleware.validateCadastroPj, FuncionariosController.createFuncionario);

module.exports = router;