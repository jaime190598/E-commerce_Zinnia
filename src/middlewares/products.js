const fs = require('fs');
const path = require('path');
const { productos } = require('../controllers/productosController');

function products(req, res, next){
    const productsFilePath = path.join(__dirname, '../data/products.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products;
}
module.exports=products();