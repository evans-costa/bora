const express = require("express");
const router = express.Router();
const EventosController = require("../controllers/EventosController");
const multerUpload = require("../config/multer");
const authMiddleware = require("../middlewares/authMiddleware");

// Ir para a tela eventos
router.get("/", EventosController.telaEventos);

// Ir para o evento de acordo com o id
router.get("/:id/evento", EventosController.eventoPorId);

// Ir para e tela de lista de Eventos e CRUD 
router.get("/listareventos", authMiddleware.validateToken, EventosController.telaListarEventos)
router.get("/listareventos/pesquisar", authMiddleware.validateToken, EventosController.pesquisarEvento)

// Ir para a tela de cadastro e criar um novo Evento
router.get(
	"/cadastroevento",
	// loginMiddleware.validateToken,
	EventosController.telaCadastroEvento
);
router.post(
	"/cadastroevento",
	// loginMiddleware.validateToken,
	multerUpload.single("file"),
	EventosController.criarEvento
);

// Ir para a tela de edição e alterar ou excluir um Evento
router.get(
	"/:id/editarevento",
	authMiddleware.validateToken, 
	EventosController.telaEditarEvento
);
router.put(
	"/:id/editarevento",
	authMiddleware.validateToken, 
	multerUpload.single("file"),
	EventosController.atualizarPorId
);
router.delete(
	"/:id/deletarevento",
	authMiddleware.validateToken, 
	EventosController.excluirPorId
);

module.exports = router;
