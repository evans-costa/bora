const express = require("express");
const router = express.Router();
const usersController = require("../controllers/UsersController");
const UserMiddleware = require("../middlewares/UserMiddleware");
const ViewUserController = require("../controllers/ViewUsersController");

router.get("/", ViewUserController.getAllUsers);
router.put("/:id", ViewUserController.userUpdate);

router.get("/cadastrar/tipocadastro", usersController.tipoCadastro)

router.get("/cadastrar/tipocadastro/pf", usersController.cadastrar);
router.post("/cadastrar/tipocadastro/pf", UserMiddleware, usersController.createUsers);

router.get("/:id", usersController.userUpdateForm);
router.put("/:id", usersController.userUpdate);
router.delete("/:id", usersController.userDestroy);

module.exports = router;
