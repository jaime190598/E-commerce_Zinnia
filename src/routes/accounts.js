const express = require('express');
const router = express.Router();
const methodOverride= require('method-override');
const usersController=require('../controllers/usersController');
//const loginController=require('../controllers/loginController');
const userMiddleware= require('../middlewares/users');
const guestMiddleware= require('../middlewares/guestMiddleware');
const authMiddleware= require('../middlewares/authMiddleware');
const userEditMiddleware= require('../middlewares/userEdit');

//method-override
router.use(methodOverride('_method', {methods:["POST", "GET"]}));


router.get('/user/register',guestMiddleware,usersController.registro);
router.get('/user/login',guestMiddleware, usersController.login);
router.get('/user/userprofile',authMiddleware,usersController.profile);
router.get('/logout/',usersController.logout);
router.post('/user/register', userMiddleware.fileUpLoad.single('avatar'),userMiddleware.validations, usersController.create);
router.post('/user/login', usersController.loginProcess);

router.put('/user/edit?', userMiddleware.fileUpLoad.single('avatar'), userEditMiddleware.validation,usersController.useredit)
module.exports=router;