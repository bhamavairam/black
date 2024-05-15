const express = require('express');  
const clientController = require('../controllers/clientController')

const router = express.Router();


router
    .route('/')
    .get(clientController.getAllClients)
    .post(clientController.checkBody, clientController.createClient);
 //    .delete(projectController.deleteUser)
    //.put();

router
    .route('/:id')
    .get(clientController.getClient)

module.exports = router;