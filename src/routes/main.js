const express = require('express');
const router = express.Router();
const homeController= require('../controllers/homeController');
const carritoController=require('../controllers/carritoController');

router.get('/',homeController.home);
router.get('/shopping_car',carritoController.carrito);

module.exports=router;