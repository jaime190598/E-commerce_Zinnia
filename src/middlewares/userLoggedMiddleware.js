
const db = require("../database/models");
function userLoggedMiddleware(req,res,next){
    res.locals.isLogged=false;
  /*   console.log(res.locals.isLogged) */
    let emailCookie= req.cookies.userEmail;
  
    /* console.log(emailCookie) */
    let userFromCookie;
    if(emailCookie!=undefined){
    db.User.findAll({
        where:{
            email:emailCookie,
        }
    }).then(result=>{
          userFromCookie=result[0].dataValues;
             delete userFromCookie['password'];
             return userFromCookie;    
        })
        .then(userFromCookie=>{
            if(userFromCookie){
                req.session.userLogged= userFromCookie;

            }
            if(req.session && req.session.userLogged){
                res.locals.isLogged=true;
                res.locals.userLogged=req.session.userLogged;
           
            }
            next();
        }).catch(function(e){
            
        })
        
    }
   
    else{
        if(req.session && req.session.userLogged){
            res.locals.isLogged=true;
            res.locals.userLogged=req.session.userLogged;
        }
    next();}
}

module.exports=userLoggedMiddleware;