const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');

// Ir para a tela eventos
router.get('/:id', CarrinhoController.telaCarrinho);

module.exports = router;
