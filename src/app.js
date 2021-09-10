const express = require('express');
const { dirname } = require('path');
const path = require('path');
const server= express();
const methodOverride= require('method-override');
const session= require('express-session');
const cookies= require('cookie-parser');
const userLoggedM= require('./middlewares/userLoggedMiddleware');
const PORT = process.env.PORT || 3000;
//routes
const mainRoute = require('./routes/main');
const productsRoute = require('./routes/products');
const accountsRoute= require('./routes/accounts');
server.use(session({
    secret:"shhh, it's a secret",
    resave:false,
    saveUninitialized:false,
}));
server.use(cookies());
server.use(userLoggedM);

server.use(express.urlencoded({extended:false}));
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
