const path = require('path');

const controlador = {
    detalle: (req, res)=>{
        res.render('detalle-producto');
    },
}
//join
module.exports=controlador;