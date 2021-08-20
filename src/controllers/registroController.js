const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const user=require('../models/Users')

const controlador = {
    registro: (req, res)=>{
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
        let newUser={
        ...req.body,
        avatar: req.file.filename,
        };
        
        user.create(newUser);
        //console.log(req.body);
        return res.send('OK, se guardo el usuario');
    }
}
//join
module.exports=controlador;