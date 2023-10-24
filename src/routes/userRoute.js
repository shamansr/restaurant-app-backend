const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const verifyToken = require('../middlewares/auth');
const PostController = require('../controllers/postController');

// Define routes
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/logout', verifyToken, UserController.logout);
router.post('/feed', verifyToken, PostController.createPost);

module.exports = router;
