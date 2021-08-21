const express = require('express');
const router = express.Router();
const methodOverride= require('method-override');
const usersController=require('../controllers/usersController');
//const loginController=require('../controllers/loginController');
const userMiddleware= require('../middlewares/users');
const guestMiddleware= require('../middlewares/guestMiddleware');
const authMiddleware= require('../middlewares/authMiddleware');
//method-override
router.use(methodOverride('_method', {methods:["POST", "GET"]}));


router.get('/registro',guestMiddleware,usersController.registro);
router.get('/user/login',guestMiddleware, usersController.login);
router.get('/user/userprofile',authMiddleware,usersController.profile);
router.get('/logout/',usersController.logout);
router.post('/register', userMiddleware.fileUpLoad.single('avatar'),userMiddleware.validations, usersController.create);
router.post('/user/login', usersController.loginProcess);

module.exports=router;