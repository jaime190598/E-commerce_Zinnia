const path = require('path');
const multer= require('multer');
const {body} = require('express-validator');
const { userInfo } = require('os');
//////Multer
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images/users');
    },
    filename: function(req,file,cb){
        let imageName= Date.now()+'_img'+path.extname(file.originalname);
        cb(null, imageName);
    }
})
let fileUpLoad=multer({storage:storage});

const validations=[
    body('name').notEmpty().withMessage('Ingresa tu nombre').bail().isAlpha ('en-US',{ignore:" -"}).withMessage('Caracteres no válidos').bail().isLength({min:2}).withMessage('Faltan caracteres'),
    body('last_name').notEmpty().withMessage('Ingresa tu apellido').bail().isAlpha('en-US',{ignore:" -"}).withMessage('Caracteres no válidos').bail().isLength({min:2}).withMessage('Faltan caracteres'),
    body('telephone').notEmpty().withMessage('Ingrese numero de telefono').bail().isLength({min:8}).withMessage('Faltan caracteres').bail().isMobilePhone().withMessage('Ingrese numero de telefono valido'),
    body('email').notEmpty().withMessage('Ingresa un email').bail().isEmail().withMessage('Debes de escribir un correo válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida').bail().isLength({min:8}).withMessage('La contraseña debe tener un mínimo de 8 caracteres'),
    body('avatar').custom((value,{req})=>{
        let file=req.file;
        let acceptedExtensions=['.jpg', '.png'];
        if(file){   
            let fileExtension= path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones de archivo no es permitida');
            }
        }
        return true;
    })
]

module.exports={fileUpLoad, validations}