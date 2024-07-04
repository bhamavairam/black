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
    .delete(userController.deleteUser)
    //.put();

router
.route('/:id')
.get(userController.getAllUsers)

module.exports = router;