const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const multerUpload = require("../config/multer");
const authMiddleware = require("../middlewares/authMiddleware")


router.get("/", authMiddleware.validateToken, AdminController.telaAdmin)

// Ir para e tela de lista de Eventos e CRUD 
router.get("/listareventos", authMiddleware.validateToken, AdminController.telaListarEventos)
router.get("/listareventos/pesquisar", authMiddleware.validateToken, AdminController.pesquisarEvento)

// Ir para a tela de edição e alterar ou excluir um Evento
router.get(
	"/:id/evento/editarevento",
	authMiddleware.validateToken, 
	AdminController.telaEditarEvento
);
router.put(
	"/:id/evento/editarevento",
	authMiddleware.validateToken, 
	multerUpload.single("file"),
	AdminController.atualizarEventoPorId
);
router.delete(
	"/:id/evento/deletarevento",
	authMiddleware.validateToken, 
	AdminController.excluirEventoPorId
);

// Ir para e tela de lista de usuários e CRUD 
router.get("/listarusuarios", authMiddleware.validateToken, AdminController.telaListarUsuarios);

// Ir para a tela de edição e alterar ou excluir um usuário
router.get(
  "/:id/usuario/editarusuario", 
  authMiddleware.validateToken, 
  AdminController.telaEditarUsuario
  );
router.put(
  "/:id/usuario/editarusuario", 
  authMiddleware.validateToken, 
  AdminController.atualizarUsuarioPorId
  );
router.delete(
  "/:id/usuario/deletarusuario", 
  authMiddleware.validateToken, 
  AdminController.excluirUsuarioPorId
  );


module.exports = router