const express = require('express');
const router = express.Router();
const productsController=require('../../controllers/api/productosController');

router.get('/products',productsController.products);
router.get('/products/detail/:id',productsController.productDetail);
router.get('/products/image/:img',productsController.image); 

module.exports=router;