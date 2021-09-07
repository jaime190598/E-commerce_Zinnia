function guestMiddleware(req,res,next){
if(req.session.userLogged){
    console.log(req.session.userLogged);
    return res.redirect('/user/userprofile')
}
next();
}

module.exports=guestMiddleware;