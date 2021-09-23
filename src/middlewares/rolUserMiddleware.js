 function rolUserMiddleware(req,res,next){
     console.log(req.session.userLogged);
    if(req.session.userLogged.fkidrol!=1){
        return res.redirect('/user/login');
    }
    next();
 }
 module.exports=rolUserMiddleware;