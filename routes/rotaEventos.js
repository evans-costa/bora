const express = require("express");
const router = express.Router();
const EventosController = require("../controllers/EventosController");
const multerUpload = require("../config/multer");

// Ir para a tela eventos
router.get("/", EventosController.telaEventos);

// Ir para a tela de cadastro e criar um novo Evento
router.get("/cadastroevento", EventosController.telaCadastroEvento);
router.post(
  "/cadastroevento",
  multerUpload.single("file"),
  EventosController.criarEvento
);

// Ir para a tela de edição e alterar ou excluir um Evento
router.get("/:id/editarevento", EventosController.telaEditarEvento);
router.put(
  "/:id/editarevento",
  multerUpload.single("file"),
  EventosController.atualizarPorId
);
router.delete("/:id/editarevento", EventosController.excluirPorId);

module.exports = router;
