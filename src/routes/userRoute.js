const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define routes
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
module.exports = router;
