const express = require('express');
const router = express.Router();
const path = require('path');
const productosController=require('../controllers/productosController');

const multer= require('multer');
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
//Inicio Metodos GET
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
//Fin metodos GET

//Inicio Metodos POST
router.post('/formulario',fileUpLoad.single('imgProduct'), productosController.addProduct);
//Fin metodos POST


module.exports=router;