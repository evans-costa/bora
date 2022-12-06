const express = require("express");
const router = express.Router();
const EventosController = require("../controllers/EventosController");
const multerUpload = require("../config/multer");
const loginMiddleware = require("../middlewares/LoginMiddleware");

// Ir para a tela eventos
router.get("/", EventosController.telaEventos);

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
	// loginMiddleware.validateToken,
	EventosController.telaEditarEvento
);
router.put(
	"/:id/editarevento",
	// loginMiddleware.validateToken,
	multerUpload.single("file"),
	EventosController.atualizarPorId
);
router.delete(
	"/:id/editarevento",
	// loginMiddleware.validateToken,
	EventosController.excluirPorId
);

module.exports = router;
