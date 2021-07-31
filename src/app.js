const express = require('express');
const { dirname } = require('path');
const path = require('path');
const server= express();
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const PORT = process.env.PORT || 3000;

//carpeta compartida
const publicPath= path.resolve(__dirname, '../public');
server.use(express.static(publicPath));

///aplicacion de ejs
server.set('view engine','ejs');
server.set('views','./src/views');

//coneccion a rutas 
server.use(mainRouter);
server.use(productsRouter);

//middleware error 404
server.use((req,res,next)=>{
    res.status(404).render('404-page');
    next();
})
//correr servidor 
server.listen(PORT, function(){
    console.log('Servidor corriendo en el puerto '+ PORT);
});
