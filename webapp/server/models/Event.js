const mongoose = require('mongoose');

const schema = mongoose.Schema({
	id: String,
	latitude: Number,
	longitude: Number,
	mag: Number,
	depth: Number,
	day: Number,
	month: Number,
	year: Number,
	country: String,
});

module.exports = mongoose.model('Event', schema);