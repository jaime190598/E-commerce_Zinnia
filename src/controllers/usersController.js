const { validationResult } = require('express-validator');
const bcryptjs=require('bcryptjs');
const fs = require('fs');
const path = require('path');
const user=require('../models/Users');
const db = require("../database/models");

const controlador = {
    registro: (req, res)=>{
        res.cookie('testin', 'hola',{maxAge:1000*30} );
        res.render('checkIn');
    },
    create: (req,res)=>{ 
        const resulValidation= validationResult(req);
        if(resulValidation.errors.length >0){
            return res.render('checkIn',{
                errors: resulValidation.mapped(),
                oldData:req.body
            })
        }
        db.User.findAll({
            where:{email:req.body.email}
        }).then(result=>{
            console.log(result[0])
            if(result[0]!=undefined){
                fs.unlink('./public/images/users/'+req.file.filename,(err)=>{
                    if(err){
                        console.log("failed to delete local image :"+ err);
                    }else{
                        console.log('successfully deleted local image');
                    }
                })
                return res.render('checkIn',{
                    errors:{
                        email:{
                            msg:'Este email está registrado'
                        }
                    },
                    oldData:req.body
                }) 
            }
            let newUser={
                ...req.body,
                password:bcryptjs.hashSync(req.body.password,10),
                avatar: req.file.filename,
                fkidrol:2,
                fkidlocation:null
                };
                db.User.create(newUser).then(()=>{
                        return res.redirect('/user/login');
                }).catch(e=>{
                    fs.unlink('./public/images/users/'+req.file.filename,(err)=>{
                        if(err){
                            console.log("failed to delete local image :"+ err);
                        }else{
                            console.log('successfully deleted local image');
                        }
                    })
                     res.status(404).render('404-page');})
            console.log(result);
        })
       
        
    },
    login: (req, res)=>{
        
        res.render('login');
    },
    loginProcess: (req, res)=>{
        db.User.findAll({
            where:{
                email:req.body.email,
            }
        }).then(result=>{
            let userToLogin=result[0].dataValues;
            let isOkPassword = bcryptjs.compareSync(req.body.password, result[0].password)
            if(isOkPassword){
                delete userToLogin['password'];
                req.session.userLogged=userToLogin;
                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email,{maxAge: (1000*60)*2})
                }
                return res.redirect('/user/userprofile');
            console.log(userToLogin);
            }
            return res.render('login',{
                errors:{
                    email:{
                        msg:'Credenciales inválidas'
                    }
                }
            })
            
        }).catch(e=>{
            return res.render('login',{
                errors:{
                    email:{
                        msg:'Error de usuario'
                    }
                }
            })
        })
       
       
    },
    profile:(req,res)=>{
        console.log(req.session.userLogged);
        res.render('userProfile',{
            user: req.session.userLogged
        })
    },
    logout: (req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
    useredit:(req,res)=>{
        let image;
        let id=req.body.id;
        if(req.file!=undefined){
            image=req.file.filename;
            //delete folder public
        fs.unlink('./public/images/productos/'+req.body.image,(err)=>{
            if(err){
                console.log("failed to delete local image :"+ err);
            }else{
                console.log('successfully deleted local image');
            }
        })
        }else{
            image= req.body.image;
        }
        let useredit;
         useredit={
            id:id,
            name:req.body.name,
            last_name:req.body.last_name,
            telephone:req.body.telephone,
            email:req.body.email,
            avatar:image
        }
        if(req.body.password!=''){
            useredit={
                ...useredit,
                password:bcryptjs.hashSync(req.body.password,10)
            }
        }
        console.log(useredit);
         db.User.update(useredit,{
            where:{iduser:id}
         });
         
         res.redirect("/user/userprofile");
         alert("los cambios se reflejaran en el siguiente inicio de sesion")
          
    }
}
//join
module.exports=controlador;