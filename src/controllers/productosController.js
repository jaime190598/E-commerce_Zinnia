const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    productos: (req, res)=>{
        const listProduct=products;
        const title='Mis Products';
        res.render('listProducts',{products:listProduct, title:title});
    },
    verano: (req, res)=>{
        const list=products.filter(data=>data.category == 'Verano');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    otono: (req, res)=>{
        const list=products.filter(data=>data.category == 'Otoño');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    primavera: (req, res)=>{
        const list=products.filter(data=>data.category == 'Primavera');
        const title=list[0].category;
        res.render('products',{products:list,title:title});
    },
    invierno: (req, res)=>{
        const list=products.filter(data=>data.category == 'Invierno');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    tops: (req, res)=>{
        const list=products.filter(data=>data.category == 'Tops|Camisas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    pantalones: (req, res)=>{
        const list=products.filter(data=>data.category == 'Pantalones|Jeans');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    vestidos: (req, res)=>{
        const list=products.filter(data=>data.category == 'Vestidos|Faldas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    abrigos: (req, res)=>{
        const list=products.filter(data=>data.category == 'Abrigos|Trench');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    pijamas: (req, res)=>{
        const list=products.filter(data=>data.category == 'Pijamas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    masvendido: (req, res)=>{
        const list=products.filter(data=>data.category == 'Lo más vendido');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    ofertas: (req, res)=>{
        const list=products.filter(data=>data.category == 'Ofertas');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    accesorios: (req, res)=>{
        const list=products.filter(data=>data.category == 'Accesorios');
        const title=list[0].category;
        res.render('products',{products:list, title:title});
    },
    
    
}
//join
module.exports=controlador;