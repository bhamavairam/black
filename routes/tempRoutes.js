const express = require('express');  
const tempController = require('../controllers/temporaryController')

const router = express.Router();


router
    .route('/')
    .get(tempController.getAll)
    .post(tempController.createTemp)
 //   .delete(projectController.deleteUser)
    //.put();

router
    .route('/:id')
 //   .get(tempController.getAll)
    .put(tempController.updateTemp)
    .delete(tempController.deleteTemp);

module.exports = router;