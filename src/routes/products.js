const express = require('express');
const router = express.Router();
const productosController=require('../controllers/productosController');


router.get('/productos', productosController.productos);
router.get('/verano', productosController.verano);
router.get('/otono', productosController.otono);
router.get('/primavera', productosController.primavera);
router.get('/invierno', productosController.invierno);
router.get('/tops|camisas', productosController.tops);
router.get('/pantalones|jeans', productosController.pantalones);
router.get('/vestidos|faldas', productosController.vestidos);
router.get('/abrigos|trench', productosController.abrigos);
router.get('/pijamas', productosController.pijamas);
router.get('/mas_vendido', productosController.masvendido);
router.get('/ofertas', productosController.ofertas);
router.get('/accesorios', productosController.accesorios);

module.exports=router;