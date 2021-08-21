const { validationResult } = require('express-validator');
const bcryptjs=require('bcryptjs');
const fs = require('fs');
const path = require('path');
const user=require('../models/Users')

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
        let userInDB= user.finndByField('email', req.body.email);
        if(userInDB){
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
        };
        
        let userCretated=user.create(newUser);
        //console.log(req.body);
        return res.redirect('/user/login');
    },
    login: (req, res)=>{

        res.render('login');
    },
    loginProcess: (req, res)=>{
        let userToLogin= user.finndByField('email', req.body.email);

        if(userToLogin){
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkPassword){
                delete userToLogin.password;
                req.session.userLogged=userToLogin;
                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email,{maxAge: (1000*60)*2})
                }
                return res.redirect('/user/userprofile')
            }
            return res.render('login',{
                errors:{
                    email:{
                        msg:'Credenciales inválidas'
                    }
                }
            })
        }
        return res.render('login',{
            errors:{
                email:{
                    msg:'Error de usuario'
                }
            }
        })
    },
    profile:(req,res)=>{
        // console.log(req.cookies.userEmail);
        res.render('userProfile',{
            user: req.session.userLogged
        })
    },
    logout: (req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}
//join
module.exports=controlador;