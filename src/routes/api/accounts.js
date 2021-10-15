const express = require('express');
const router = express.Router();
const usersController=require('../../controllers/api/usersController');

router.get('/users',usersController.users);
router.get('/users/detail/:id',usersController.usersDetail);
router.get('/users/:id',usersController.usersId);
router.get('/users/avatar/:img',usersController.avatar);

module.exports=router;