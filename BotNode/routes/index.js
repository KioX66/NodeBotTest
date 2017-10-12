"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ControlerPrueba_1 = require("./Controler/ControlerPrueba");
/*
 * GET home page.
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    let x = ControlerPrueba_1.prueba.metodoPrueba();
    res.send(x.toString());
});
exports.default = router;
//# sourceMappingURL=index.js.map