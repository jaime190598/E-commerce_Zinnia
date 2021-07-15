const path = require('path');

const controlador = {
    home: (req, res)=>{
        return res.render('home');
    }, 
}
//join
module.exports=controlador;