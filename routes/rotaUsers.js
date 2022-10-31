const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UsersController');

router.get('/cadastrar',usersController.cadastrar);
router.post('/cadastrar',usersController.createUsers);
router.get('/:id/editar',usersController.editUser)

module.exports = router;