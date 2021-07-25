const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Get Events
router.post('/login', authController.logIn);

router.post('/signup', authController.SignUp);

router.get('/logout', authController.LogOut);

module.exports = router;