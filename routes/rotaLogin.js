const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const authMiddleware = require("../middlewares/authMiddleware");
const isLoggedMiddleware = require("../middlewares/isLoggedMiddleware");
const handleRoutes = require("../middlewares/handleLoginRoutes");

router.get("/", isLoggedMiddleware.logged, LoginController.formLogin);
router.post("/",
  handleRoutes.handleRoutes,
  authMiddleware.inputValidation,
  authMiddleware.validateUser,
  LoginController.login,
);

module.exports = router;