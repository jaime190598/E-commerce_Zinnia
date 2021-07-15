const express = require('express');
const router = express.Router();
const homeController= require('../controllers/homeController');
const registroController=require('../controllers/registroController');
const loginController=require('../controllers/loginController');
const carritoController=require('../controllers/carritoController');

router.get('/',homeController.home);
router.get('/registro',registroController.registro);
router.get('/login', loginController.login)
router.get('/carrito',carritoController.carrito)

module.exports=router;