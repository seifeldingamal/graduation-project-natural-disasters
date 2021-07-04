const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://admin:admin@main.llv7l.mongodb.net/NaturalApp?retryWrites=true&w=majority', { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).then(() => {
        const app = express();

        // Middleware
        app.use(bodyParser.json());
        app.use(cors());

        app.get('/', (req, res) => {
            res.json({ message: 'Welcome to our application' });
        });

        const events = require('./routes/api/events');

        app.use('/api/events', events);

        const users = require('./routes/api/users');

        app.use('/api/users', users);

        const port = process.env.PORT || 5000;

        app.listen(port, () => console.log(`Server started on port ${port}`));
    })