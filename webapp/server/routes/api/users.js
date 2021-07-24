const express = require('express');
const userController = require('../controllers/authController');

const router = express.Router();

// Get Events
router.get('/', userController.userGet);

router.post('/', userController.userPost);

module.exports = router;