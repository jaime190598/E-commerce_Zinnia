const path = require('path');

const controlador = {
    login: (req, res)=>{
        res.render('login');
    },
}
//join
module.exports=controlador;