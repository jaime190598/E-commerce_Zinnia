 function rolUserMiddleware(req,res,next){
    if(req.session.userLogged.fkidrol!=1){
        return res.redirect('/user/login');
    }
    next();
 }
 module.exports=rolUserMiddleware;