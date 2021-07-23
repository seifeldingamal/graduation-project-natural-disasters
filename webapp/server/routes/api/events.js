const express = require('express');
const Event = require('../../models/Event');

const router = express.Router();

// Get Events
router.get('/', async (req, res) => {
    const events = await Event.find({}, 'id latitude longitude mag depth day month year country -_id').limit(15000)
    res.send(events);
});

router.post("/", async (req, res) => {
	const event = new Event({
        long: req.body.long,
        lat: req.body.lat,
        mag: req.body.mag
    });
	await event.save();
	res.send(event);
});

module.exports = router;