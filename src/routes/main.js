const express = require('express');
const router = express.Router();
const homeController= require('../controllers/homeController');
const registroController=require('../controllers/registroController');
const loginController=require('../controllers/loginController');
const carritoController=require('../controllers/carritoController');
const formController=require('../controllers/formController');

router.get('/',homeController.home);
router.get('/registro',registroController.registro);
router.get('/login', loginController.login);
router.get('/carrito',carritoController.carrito);
router.get('/form',formController.formulario)

module.exports=router;