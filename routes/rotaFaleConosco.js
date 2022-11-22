const express = require('express');
const router = express.Router();
const faleConosco = require('../controllers/FaleConoscoController');

router.get('/', faleConosco.entrarEmContato);

module.exports = router;