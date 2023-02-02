const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authMiddleware = require("../middlewares/authMiddleware");
const isLoggedMiddleware = require("../middlewares/isLoggedMiddleware");

router.get("/", isLoggedMiddleware.logged, LoginController.formLogin);
router.post("/", authMiddleware.inputValidation, authMiddleware.validateUser, LoginController.login);

module.exports = router;