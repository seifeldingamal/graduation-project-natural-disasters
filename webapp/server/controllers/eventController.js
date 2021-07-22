const Event = require('../models/Event');

module.exports.eventGet = async (req, res) => {
    const events = await Event.find();
    res.send(events);
}

module.exports.eventPost = async (req, res) => {
	const event = new Event({
        long: req.body.long,
        lat: req.body.lat,
        mag: req.body.mag
    });
	await event.save();
	res.send(event);
}