const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authMiddleware = require("../middlewares/authMiddleware")
const loginAuthMiddleware = require("../middlewares/loginAuthMiddleware")

router.get("/", loginAuthMiddleware.logged, LoginController.formLogin);
router.post("/", authMiddleware.inputValidation, authMiddleware.validateUser, LoginController.login);

module.exports = router;