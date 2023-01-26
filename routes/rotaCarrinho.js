const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const carrinhoMiddleware = require('../middlewares/carrinhoMiddleware');
const loginAuthMiddleware = require('../middlewares/loginAuthMiddleware');

// Ir para a tela eventos
router.get('/:id', loginAuthMiddleware.notLogged, carrinhoMiddleware.findDuplicate, CarrinhoController.adicionarEvento);

module.exports = router;
