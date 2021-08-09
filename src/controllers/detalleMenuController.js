const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    getIdProduct:(req,res)=>{
        //console.log(req.params.id);
        let id= req.params.id;
        const product=products.filter(data=>data.id == id);
        console.log(product);
        res.render('detalleProducto',{product:product});
       // res.send('hola'+req.params.id);
    }
}
//join
module.exports=controlador;