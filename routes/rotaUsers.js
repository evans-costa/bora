const express = require("express");
const router = express.Router();
const userMiddleware = require("../middlewares/userMiddleware");
const UsersController = require("../controllers/UsersController");
const authMiddleware = require("../middlewares/authMiddleware")
// const ViewUserController = require("../controllers/ViewUsersController");

router.get("/cadastrar/tipocadastro", UsersController.tipoCadastro)

router.get("/cadastrar/tipocadastro/pf", UsersController.cadastrar);
router.post("/cadastrar/tipocadastro/pf", userMiddleware.inputValidationPf, userMiddleware.validateCadastroPf, UsersController.createUsers);

router.get("/", authMiddleware.validateToken, UsersController.getAllUsers);

router.get("/:id/editarusuario", authMiddleware.validateToken, UsersController.userUpdateForm);
router.put("/:id/editarusuario", authMiddleware.validateToken, UsersController.userUpdate);
router.delete("/:id/deletarusuario", authMiddleware.validateToken, UsersController.userDestroy);


module.exports = router;
