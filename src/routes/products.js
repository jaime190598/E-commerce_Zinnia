const express = require('express');
const router = express.Router();
const path = require('path');
const multer= require('multer');
const {body} = require('express-validator');
const methodOverride= require('method-override');
const productosController=require('../controllers/productosController');
const detalleMenuController=require('../controllers/detalleMenuController');
const formController=require('../controllers/formController');

//method-override
router.use(methodOverride('_method', {methods:["POST", "GET"]}));

//////Multer
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images/productos');
    },
    filename: function(req,file,cb){
        let imageName= Date.now()+path.extname(file.originalname);
        cb(null, imageName);
    }
})
let fileUpLoad=multer({storage:storage});
///////Fin multer
///////Validator
const validations=[
    body('name').notEmpty().withMessage('Ingresa tu nombre'),
    body('description').notEmpty().withMessage('Ingresa la descripción'),
    body('imgProduct').optional({checkFalsy: true}),
    body('category').notEmpty().withMessage('Seleccione categoria'),
    body('cost').notEmpty(),
    body('size').notEmpty(),
    body('color').notEmpty()
]
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
router.get('/formRegister',formController.formulario);
//GET:ID
router.get('/detalleMenu/:id?',detalleMenuController.getIdProduct);
router.get('/product/:id/edit?',formController.geteditform);
//Fin metodos GET
//Inicio Metodos POST
router.post('/products', validations, fileUpLoad.single('imgProduct'), formController.addProduct);
//Fin metodos POST
//Inicio Metodo PUT
router.put('/edit', validations, fileUpLoad.single('imgProduct'), formController.editProduct);
//final methodo put 
//Inicio Metodo DELET
router.delete('/products/:id/:image?',formController.deletProduct)
//final metodo delet

module.exports=router;