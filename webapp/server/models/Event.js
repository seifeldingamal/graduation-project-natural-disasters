const mongoose = require('mongoose');

const schema = mongoose.Schema({
	long: Number,
	lat: Number,
    mag: Number
});

module.exports = mongoose.model('Event', schema);