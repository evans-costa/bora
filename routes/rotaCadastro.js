const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/CadastroController');

router.get('/',cadastroController.cadastrar);

module.exports = router;