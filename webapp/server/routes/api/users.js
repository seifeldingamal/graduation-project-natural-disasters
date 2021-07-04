const express = require('express');
const User = require('../../models/User');

const router = express.Router();

// Get Events
router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.post("/", async (req, res) => {
	const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
	await user.save();
	res.send(user);
});

module.exports = router;