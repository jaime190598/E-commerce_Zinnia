const express = require('express');
const router = express.Router();
const productsController=require('../../controllers/api/categoryController');

router.get('/category',productsController.category);
/* router.get('/products/detail/:id',productsController.productDetail);
router.get('/products/image/:img',productsController.image); */ 

module.exports=router;