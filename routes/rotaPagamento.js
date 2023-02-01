const express = require('express');
const router = express.Router();
const PagamentoController = require("../controllers/PagamentoController");
const loginAuthMiddleware = require("../middlewares/loginAuthMiddleware");


router.get('/', loginAuthMiddleware.notLogged, PagamentoController.telaPagamento);
router.post('/', loginAuthMiddleware.notLogged, PagamentoController.criarPedido);


module.exports = router;