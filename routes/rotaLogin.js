const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/LoginController");
const loginMiddleware = require("../middlewares/LoginMiddleware");


router.get("/", LoginController.formLogin);
router.post("/",LoginController.login);
module.exports = router;