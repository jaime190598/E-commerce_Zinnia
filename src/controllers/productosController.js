
const db = require("../database/models")
const fs = require('fs');
const path = require('path');
//const products=getProductsJSON();
function getProductsJSON(){
    const productsFilePath = path.join(__dirname, '../data/products.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products;
}
const controlador = {
    productos: (req, res)=>{
        //const listProduct=products;
        /* const title='Mis Products';
        res.render('listProducts',{products:getProductsJSON(), title:title}); */
      db.Product.findAll().then(resul=>{
          res.send(resul);
      })
    },
    verano: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Verano');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    otono: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Otoño');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    primavera: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Primavera');
        const title=list[0].category;
        res.render('products',{products:list,title:title});
    },
    invierno: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Invierno');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    tops: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Tops|Camisas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    pantalones: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Pantalones|Jeans');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    vestidos: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Vestidos|Faldas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    abrigos: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Abrigos|Trench');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    pijamas: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Pijamas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    masvendido: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Lo más vendido');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    ofertas: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Ofertas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    accesorios: (req, res)=>{
        const products=getProductsJSON();
        const list=products.filter(data=>data.category == 'Accesorios');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    
    
}
//join
module.exports=controlador;