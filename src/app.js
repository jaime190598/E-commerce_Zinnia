const express = require('express');
const { dirname } = require('path');
const path = require('path');
const server= express();
const mainRoute = require('./routes/main');
const productsRoute = require('./routes/products');
const accountsRoute= require('./routes/accounts');
const PORT = process.env.PORT || 3000;
const methodOverride= require('method-override');
//carpeta compartida
const publicPath= path.resolve(__dirname, '../public');
server.use(express.static(publicPath));

///aplicacion de ejs
server.set('view engine','ejs');
server.set('views','./src/views');
server.use(methodOverride('_method'));
//coneccion a rutas 
server.use(mainRoute);
server.use(productsRoute);
server.use(accountsRoute);

//middleware error 404
server.use((req,res,next)=>{
    res.status(404).render('404-page');
    next();
})
//correr servidor 
server.listen(PORT, function(){
    console.log('Servidor corriendo en el puerto '+ PORT);
});
