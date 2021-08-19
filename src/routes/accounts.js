const express = require('express');
const router = express.Router();
const path = require('path');
const multer= require('multer');
const {body} = require('express-validator');
const methodOverride= require('method-override');
const registroController=require('../controllers/registroController');
const loginController=require('../controllers/loginController');

//method-override
router.use(methodOverride('_method', {methods:["POST", "GET"]}));
//////Multer
const storage= multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images/users');
    },
    filename: function(req,file,cb){
        let imageName= Date.now()+path.extname(file.originalname);
        cb(null, imageName);
    }
})
let fileUpLoad=multer({storage:storage});
const validations=[
    body('name').notEmpty().withMessage('Ingresa tu nombre'),
    body('lastName').notEmpty().withMessage('Ingresa la nombre'),
    body('imgUser').optional({checkFalsy: true}),
    body('email').notEmpty().withMessage('Seleccione categoria'),
    body('password').notEmpty()
]

router.get('/registro',registroController.registro);
router.get('/login', loginController.login);
router.post('/register',validations, fileUpLoad.single('imgUser'), registroController.create);


module.exports=router;