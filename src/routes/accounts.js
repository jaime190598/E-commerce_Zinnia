const express = require('express');
const router = express.Router();
const methodOverride= require('method-override');
const registroController=require('../controllers/registroController');
const loginController=require('../controllers/loginController');
const userMiddleware= require('../middlewares/users');
//method-override
router.use(methodOverride('_method', {methods:["POST", "GET"]}));


router.get('/registro',registroController.registro);
router.get('/login', loginController.login);
router.post('/register', userMiddleware.fileUpLoad.single('avatar'),userMiddleware.validations, registroController.create);


module.exports=router;