const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UsersController');

router.get('/cadastrar',usersController.cadastrar);

module.exports = router;