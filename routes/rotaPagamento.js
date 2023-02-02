const express = require('express');
const router = express.Router();
const PagamentoController = require("../controllers/PagamentoController");
const isLoggedMiddleware = require("../middlewares/isLoggedMiddleware");


router.get('/', isLoggedMiddleware.notLogged, PagamentoController.telaPagamento);
router.post('/', isLoggedMiddleware.notLogged, PagamentoController.criarPedido);


module.exports = router;