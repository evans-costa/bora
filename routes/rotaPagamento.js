const express = require('express');
const router = express.Router();
const EventosController = require("../controllers/PagamentoController")


router.get('/', EventosController.index)


module.exports = router;