const express = require("express");
const router = express.Router();
const calculadora = require("../controller/calculadora");

router.post("/somar", calculadora.somar);
router.post("/subtrair", calculadora.subtrair);
router.post("/multiplicar", calculadora.multiplicar);
router.post("/dividir", calculadora.dividir);

module.exports = router;