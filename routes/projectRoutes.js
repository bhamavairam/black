const express = require('express');  
const projectController = require('../controllers/projectController')

const router = express.Router();


router
    .route('/')
    .get(projectController.getAllProjects)
    .post(projectController.checkBody, projectController.createProject)
 //    .delete(projectController.deleteUser)
    //.put();

//router
//.route('/:id')
//.get(userController.getAllUsers)

module.exports = router;