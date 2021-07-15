const express = require('express');
const { dirname } = require('path');
const path = require('path');
const server= express();
const mainRouter = require('./routes/main');
const PORT = process.env.PORT || 3000;

const publicPath= path.resolve(__dirname, '../public');
server.use(express.static(publicPath));
server.set('view engine','ejs')
server.set('views','./src/views')
server.use(mainRouter);

server.listen(PORT, function(){
    console.log('Servidor corriendo en el puerto '+ PORT);
});
