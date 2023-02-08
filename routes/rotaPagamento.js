const express = require('express');
const router = express.Router();
const PagamentoController = require("../controllers/PagamentoController");
const isLoggedMiddleware = require("../middlewares/isLoggedMiddleware");
const gerarPedidoMiddleware = require("../middlewares/gerarPedidoMiddleware");


router.get('/', isLoggedMiddleware.notLogged, PagamentoController.telaPagamento);
router.post('/', isLoggedMiddleware.notLogged, gerarPedidoMiddleware.gerarPedido, PagamentoController.pedidoEvento);


module.exports = router;