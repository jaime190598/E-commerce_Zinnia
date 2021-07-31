const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    productos: (req, res)=>{
        const listProduct=products;
        res.render('productos',{products:listProduct});
    },
    verano: (req, res)=>{
        const list=products.filter(data=>data.category == 'Verano');
        res.render('productos',{products:list});
    },
    otono: (req, res)=>{
        const list=products.filter(data=>data.category == 'Otoño');
        res.render('productos',{products:list});
    },
    primavera: (req, res)=>{
        const list=products.filter(data=>data.category == 'Primavera');
        res.render('productos',{products:list});
    },
    invierno: (req, res)=>{
        const list=products.filter(data=>data.category == 'Invierno');
        res.render('productos',{products:list});
    },
    tops: (req, res)=>{
        const list=products.filter(data=>data.category == 'Tops|Camisas');
        res.render('productos',{products:list});
    },
    pantalones: (req, res)=>{
        const list=products.filter(data=>data.category == 'Pantalones|Jeans');
        res.render('productos',{products:list});
    },
    vestidos: (req, res)=>{
        const list=products.filter(data=>data.category == 'Vestidos|Faldas');
        res.render('productos',{products:list});
    },
    abrigos: (req, res)=>{
        const list=products.filter(data=>data.category == 'Abrigos|Trench');
        res.render('productos',{products:list});
    },
    pijamas: (req, res)=>{
        const list=products.filter(data=>data.category == 'Pijamas');
        res.render('productos',{products:list});
    },
    masvendido: (req, res)=>{
        const list=products.filter(data=>data.category == 'Lo más vendido');
        res.render('productos',{products:list});
    },
    ofertas: (req, res)=>{
        const list=products.filter(data=>data.category == 'Ofertas');
        res.render('productos',{products:list});
    },
    accesorios: (req, res)=>{
        const list=products.filter(data=>data.category == 'Accesorios');
        res.render('productos',{products:list});
    },
    addProduct:(req,res)=>{
        res.render('home');
    }
    
}
//join
module.exports=controlador;