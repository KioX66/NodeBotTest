import { prueba }  from './Controler/ControlerPrueba'


/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    let x = prueba.metodoPrueba();
    res.send(x.toString());
});

export default router; 