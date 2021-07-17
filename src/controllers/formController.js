const path = require('path');

const controlador = {
    formulario: (req, res)=>{
        res.render('form');
    },
}
//join
module.exports=controlador;