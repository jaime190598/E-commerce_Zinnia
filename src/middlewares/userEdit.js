const {body} = require('express-validator');
const path = require('path');
const validation = [
    body('name').notEmpty().withMessage('Este campo no debe de estar vacío').bail().isAlpha ('en-US',{ignore:" -"}).withMessage('Caracteres no válidos').bail().isLength({min:2}).withMessage('Faltan caracteres'),
    body('last_name').notEmpty().withMessage('Este campo no debe de estar vacío').bail().isAlpha('en-US',{ignore:" -"}).withMessage('Caracteres no válidos').bail().isLength({min:2}).withMessage('Faltan caracteres'),
    body('telephone').notEmpty().withMessage('Este campo no debe de estar vacío').bail().isLength({min:8}).withMessage('Faltan caracteres').bail().isMobilePhone().withMessage('Ingrese numero de telefono valido'),
    body('email').notEmpty().withMessage('Este campo no debe de estar vacío').bail().isEmail().withMessage('Debes de escribir un correo válido'),
    body('password').custom(value=>{
        if(value.length>0 && value.length<8){
            throw new Error('La contraseña debe tener un mínimo de 8 caracteres');
            
        }
        return true;
    }),
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

module.exports= {validation};