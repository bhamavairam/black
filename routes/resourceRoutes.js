const express = require('express');  
const resourceController = require('../controllers/resourceController')

const router = express.Router();


router
    .route('/')
    .get(resourceController.getResources)
    .post(resourceController.checkBody, resourceController.createResource);
 //    .delete(projectController.deleteUser)
    //.put();

router
    .route('/skilled')
    .get(resourceController.findSkillResource);

router
    .route('/:id')
    .get(resourceController.findResource)
    .put(resourceController.updateResource)
    .delete(resourceController.deleteResource)

module.exports = router;