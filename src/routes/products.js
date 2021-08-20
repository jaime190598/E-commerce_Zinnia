const express = require('express');
const router = express.Router();
const methodOverride= require('method-override');
const productosController=require('../controllers/productosController');
const detalleMenuController=require('../controllers/detalleMenuController');
const formController=require('../controllers/formController');
const productsMiddleware=require('../middlewares/products');
//method-override
router.use(methodOverride('_method', {methods:["POST", "GET"]}));


///////Fin validator
//Inicio Metodos GET
router.get('/products', productosController.productos);
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
router.get('/formProduct',formController.formulario);
//GET:ID
router.get('/detalleMenu/:id?',detalleMenuController.getIdProduct);
router.get('/product/:id/edit?',formController.geteditform);
//Fin metodos GET
//Inicio Metodos POST
router.post('/products', productsMiddleware.fileUpLoad.single('imgProduct'), productsMiddleware.validations, formController.addProduct);
//Fin metodos POST
//Inicio Metodo PUT
router.put('/edit', productsMiddleware.fileUpLoad.single('imgProduct'), productsMiddleware.validations, formController.editProduct);
//final methodo put 
//Inicio Metodo DELET
router.delete('/products/:id/:image?',formController.deletProduct)
//final metodo delet

module.exports=router;