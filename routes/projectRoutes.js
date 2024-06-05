const express = require('express');  
const projectController = require('../controllers/projectController')

const router = express.Router();


router
    .route('/')
    .get(projectController.getAllprojects)
    .post(projectController.checkBody, projectController.createProject);
 //    .delete(projectController.deleteUser)
    //.put();

router
    .route('/:id')
    .get(projectController.findProject)
    .put(projectController.updateProject)
    .delete(projectController.deleteProject);

module.exports = router;