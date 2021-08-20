const path = require('path');
const multer= require('multer');
const {body} = require('express-validator');
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
    body('name').notEmpty().withMessage('Ingresa tu nombre'),
    body('lastName').notEmpty().withMessage('Ingresa tu apellido'),
    body('email').notEmpty().withMessage('Ingresa un email').bail().isEmail().withMessage('Debes de escribir un correo válido'),
    body('password').notEmpty().withMessage('Ingresa una contraseña'),
    body('avatar').custom((value,{req})=>{
        let file=req.file;
        let acceptedExtensions=['.jpg', '.png'];
        if(!file){
            throw new Error('Tienes que subir una imagen');
        }else{
            let fileExtension= path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}');
            }
        }
        return true;
    })
]

module.exports={fileUpLoad, validations}