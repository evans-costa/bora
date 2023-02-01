const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const carrinhoMiddleware = require('../middlewares/carrinhoMiddleware');
const loginAuthMiddleware = require('../middlewares/loginAuthMiddleware');

router.get('/', loginAuthMiddleware.notLogged, CarrinhoController.telaCarrinho);

router.get('/:id', loginAuthMiddleware.notLogged, carrinhoMiddleware.findDuplicate, CarrinhoController.adicionarEvento);

router.get('/:id/excluirevento', loginAuthMiddleware.notLogged, CarrinhoController.excluirEvento);

module.exports = router;
