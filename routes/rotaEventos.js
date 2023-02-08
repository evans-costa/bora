const express = require('express');
const router = express.Router();
const EventosController = require('../controllers/EventosController');
const multerUpload = require('../config/multer');
const staffLoggedMiddleware = require("../middlewares/staffLoggedMiddleware");

// Ir para a tela eventos
router.get('/', EventosController.telaEventos);

// Ir para o evento de acordo com o id
router.get('/:id/evento', EventosController.eventoPorId);

// Ir para a tela de cadastro e criar um novo Evento
router.get(
  '/cadastroevento',
  staffLoggedMiddleware.notLogged,
  EventosController.telaCadastroEvento
);
router.post(
  '/cadastroevento',
  staffLoggedMiddleware.notLogged,
  multerUpload.single('file'),
  EventosController.criarEvento
);

module.exports = router;
