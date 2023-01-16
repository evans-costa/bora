const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authMiddleware = require("../middlewares/authMiddleware")


router.get("/", LoginController.formLogin);
router.post("/", authMiddleware.inputValidation, authMiddleware.validateUser, LoginController.login);
router.get('/profile', LoginController.viewsUserProfile);

module.exports = router;