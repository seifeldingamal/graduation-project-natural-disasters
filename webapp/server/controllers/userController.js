const User = require('../models/User');

module.exports.usersGet = async (req, res) => {
    const users = await User.find();
    res.send(users);
}

module.exports.userPost = async (req, res) => {
	const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
	await user.save();
	res.send(user);
}