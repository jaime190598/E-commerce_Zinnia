const path = require('path');

const controlador = {
    carrito: (req, res)=>{
        res.render('carrito_compras');
    },
}
//join
module.exports=controlador;