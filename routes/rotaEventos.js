const express = require("express");
const router = express.Router();
const EventosController = require("../controllers/EventosController");
const multerUpload = require("../config/multer");
const loginMiddleware = require("../middlewares/LoginMiddleware");

// Ir para a tela eventos
router.get("/", EventosController.telaEventos);

// Ir para o evento de acordo com o id
router.get("/:id/evento", EventosController.eventoPorId);


// Ir para e tela de lista de Eventos e CRUD 
router.get("/listareventos", EventosController.telaListarEventos)

router.get("/listareventos/pesquisar", EventosController.pesquisarEvento)

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
	"/:id/deletarevento",
	// loginMiddleware.validateToken,
	EventosController.excluirPorId
);

module.exports = router;
