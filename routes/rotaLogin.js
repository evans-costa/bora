const express = require('express');
const router = express.Router();
const LoginController = require("../controllers/LoginController")


router.get('/', LoginController.login)


module.exports = router;