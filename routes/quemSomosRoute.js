const express = require("express");
const router = express.Router();
const QuemSomosController = require("../controllers/QuemSomosController");

router.get("/", QuemSomosController.quemSomosView);

module.exports = router;
