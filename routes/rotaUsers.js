const express = require("express");
const router = express.Router();
const usersController = require("../controllers/UsersController");
const UserMiddleware = require("../middlewares/UserMiddleware");

router.get("/cadastrar", usersController.cadastrar);
router.post("/cadastrar",UserMiddleware, usersController.createUsers);

module.exports = router;
