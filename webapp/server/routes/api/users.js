const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();

// Get Events
router.get('/', userController.usersGet);

router.post('/', userController.userPost);

module.exports = router;