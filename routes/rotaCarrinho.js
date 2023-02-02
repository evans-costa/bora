const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const carrinhoMiddleware = require('../middlewares/carrinhoMiddleware');
const isLoggedMiddleware = require('../middlewares/isLoggedMiddleware');

router.get('/', isLoggedMiddleware.notLogged, CarrinhoController.telaCarrinho);

router.get('/:id', isLoggedMiddleware.notLogged, carrinhoMiddleware.findDuplicate, CarrinhoController.adicionarEvento);

router.get('/:id/excluirevento', isLoggedMiddleware.notLogged, CarrinhoController.excluirEvento);

module.exports = router;
