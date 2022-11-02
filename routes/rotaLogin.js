const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const loginMiddleware = require("../middlewares/LoginMiddleware");


router.get("/", LoginController.login);
router.post(
  "/",
  loginMiddleware.inputValidation,
  loginMiddleware.validateUser,
  LoginController.authenticateUser
);
module.exports = router;