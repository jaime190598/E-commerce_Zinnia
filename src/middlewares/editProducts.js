const path = require('path');
const multer= require('multer');
const {body} = require('express-validator');
//////Multer
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images/productos');
    },
    filename: function(req,file,cb){
        let imageName= Date.now()+'_img'+path.extname(file.originalname);
        cb(null, imageName);
    }
})
let fileUpLoad=multer({storage:storage});
///////Fin multer
///////Validator
const validations=[
    body('code').notEmpty().withMessage('Ingresa el codigo de producto').bail().isLength({min:8}).withMessage('Faltan caracteres'),
    body('name').notEmpty().withMessage('Ingresa tu nombre').bail().isLength({min:5}).withMessage('Faltan caracteres'),
    body('description').notEmpty().withMessage('Ingresa la descripción').bail().isLength({min:20}).withMessage('Faltan caracteres'),
    body('category').notEmpty().withMessage('Seleccione categoria'),
    body('clothing_brand').notEmpty().withMessage('Seleccione la marca de ropa'),
    body('sale_price').notEmpty().withMessage('Ingrese costo'),
    body('stock').notEmpty().withMessage('Ingrese stock de venta'),
    body('size').notEmpty().withMessage('Ingrese talla'),
    body('color').notEmpty().withMessage('Ingrese Color'),
    body('imgProduct').custom((value,{req})=>{
        let file=req.file;
        let acceptedExtensions=['.jpg', '.png'];
        if(file){
           
            let fileExtension= path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error('Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}');
            }
        }
        return true;
    })
]
module.exports={fileUpLoad,validations};