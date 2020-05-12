const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//get form route
router.get('/',userController.get_form);
//post form route
router.post('/',userController.post_form);

module.exports = router;