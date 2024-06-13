import express from 'express';
import { formularioLogin, formularioRecuperarPassword, formularioRegistro } from '../controllers/usuarioController.js';

const router = express.Router() //instanciar Router 

router.get('/login', formularioLogin)
router.get('/registro', formularioRegistro) //que funcion del controlador se ejecuta cuando se accede a la ruta
router.get('/recuperar-password', formularioRecuperarPassword)

export default router