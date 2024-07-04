const express = require('express');  
const userController = require('./../controllers/userController')
const authController = require('./../controllers/authController')

const router = express.Router();

//router.param('id', userController.checkID);

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.checkBody, userController.loginUser)
    //.put();

router
.route('/:id')
.get(userController.getAllUsers)
.delete(userController.deleteUser)

module.exports = router;