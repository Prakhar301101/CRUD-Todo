const express = require("express");
const router = express.Router();
const userController=require('../controllers/userController');



router.post('/api/users',userController.registerUser);
router.post('/api/users/login',userController.loginUser);
router.get('/api/users/me',userController.getUser);
router.post('/api/users/logout',userController.logoutUser);

module.exports=router;