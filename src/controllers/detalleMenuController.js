const path = require('path');
const fs = require('fs');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    getIdProduct:(req,res)=>{
        //console.log(req.params.id);
        db.Product.findByPk(req.params.id,{include:[{association:"category"},{association:"clothing_brand"},{association:"size"}]}).then(product=>{
            res.render('productDetail',{product});   
        })        
       // res.send('hola'+req.params.id);
    }
}
//join
module.exports=controlador;