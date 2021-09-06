const path = require('path');
const multer= require('multer');
const {body} = require('express-validator');
//////Multer
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images/productos');
    },
    filename: function(req,file,cb){
        let imageName= Date.now()+path.extname(file.originalname);
        cb(null, imageName);
    }
})
let fileUpLoad=multer({storage:storage});
///////Fin multer
///////Validator
const validations=[
    body('name').notEmpty().withMessage('Ingresa tu nombre'),
    body('description').notEmpty().withMessage('Ingresa la descripción'),
    body('category').notEmpty().withMessage('Seleccione categoria'),
    body('sale_price').notEmpty().withMessage('Ingrese costo'),
    body('size').notEmpty().withMessage('Ingrese talla'),
    body('color').notEmpty().withMessage('Ingrese Color'),
    body('imgProduct').custom((value,{req})=>{
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
module.exports={fileUpLoad,validations};