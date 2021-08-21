const user = require('../models/Users');
function userLoggedMiddleware(req,res,next){
    res.locals.isLogged=false;

    let emailCookie= req.cookies.userEmail;
    let userFromCookie= user.finndByField('email', emailCookie);

    if(userFromCookie){
        req.session.userLogged= userFromCookie;
    }
    if(req.session && req.session.userLogged){
    res.locals.isLogged=true;
    res.locals.userLogged=req.session.userLogged;
    }

    
    next();
}

module.exports=userLoggedMiddleware;