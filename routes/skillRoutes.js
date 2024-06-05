const express = require('express');  
const skillController = require('../controllers/skillsController')

const router = express.Router();


router
    .route('/')
    .get(skillController.getAllskill)
    .post(skillController.checkBody, skillController.createSkill);
 //    .delete(projectController.deleteUser)
    //.put();

router
    .route('/:id')
    .get(skillController.findSkill)
    .put(skillController.updateSkill)
    .delete(skillController.deleteSkill);

module.exports = router;