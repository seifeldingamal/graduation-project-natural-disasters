const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter your name!'],
		lowercase: true
	},
	username: {
		type: String,
		required: [true, 'Please enter a username!'],
		unique: true,
		lowercase: true
	},
    password: {
		type: String,
		required: [true, 'Please enter a password!'],
		minlength: [6, 'Minimum password length is 6 characters!']
	},
	email: {
		type: String,
		required: [true, 'Please enter an email!'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a valid email!']
	},
	city: {
		type: String,
		lowercase: true
	},
	country: {
		type: String,
		lowercase: true
	}
});

schema.pre('save', async function (next) { 
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

schema.statics.login = async function (username, password) {
	const user = await this.findOne({ username });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			return user;
		}
		throw Error('Incorrect password!');
	}
	throw Error('Incorrect username!');
}

module.exports = mongoose.model('User', schema);