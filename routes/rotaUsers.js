const express = require("express");
const router = express.Router();
const userMiddleware = require("../middlewares/UserMiddleware");
const usersController = require("../controllers/UsersController");
const authMiddleware = require("../middlewares/authMiddleware")
// const ViewUserController = require("../controllers/ViewUsersController");

router.get("/cadastrar/tipocadastro", usersController.tipoCadastro)

router.get("/cadastrar/tipocadastro/pf", usersController.cadastrar);
router.post("/cadastrar/tipocadastro/pf", userMiddleware.inputValidation, userMiddleware.validateCadastro, usersController.createUsers);

router.get("/", authMiddleware.validateToken, usersController.getAllUsers);

router.get("/:id/editarusuario", authMiddleware.validateToken, usersController.userUpdateForm);
router.put("/:id/editarusuario", authMiddleware.validateToken, usersController.userUpdate);
router.delete("/:id/deletarusuario", authMiddleware.validateToken, usersController.userDestroy);


module.exports = router;
