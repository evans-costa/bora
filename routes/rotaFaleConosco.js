const express = require('express');
const router = express.Router();
const faleConosco = require('../controllers/FaleConoscoController');

router.get('/:id?', faleConosco.entrarEmContato);
router.post('/:id?', faleConosco.faleConoscoCreate);

module.exports = router;