const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
	username: String,
    password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [6, 'Minimum password length is 6 characters'],
	},
	email: {
		type: String,
		required: [true, 'Please enter an email'],
		unique: true,
		lowercase: true,
		validate: [isEmail, 'Please enter a valid email']
	},
});

schema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

schema.statics.login = async function(email, password) {
	const user = await this.findOne({ email });
	if (user) {
	  const auth = await bcrypt.compare(password, user.password);
	  if (auth) {
		return user;
	  }
	  throw Error('incorrect password');
	}
	throw Error('incorrect email');
  };

module.exports = mongoose.model('User', schema);