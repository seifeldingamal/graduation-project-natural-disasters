const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser'); 
const path = require('path');
const auth = require('./routes/authUser');
const events = require('./routes/api/events');

mongoose
    .connect('mongodb+srv://admin:admin@main.llv7l.mongodb.net/NaturalApp?retryWrites=true&w=majority', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => {
        const app = express();

        // Middleware
        app.use(bodyParser.json());
        app.use(cors());
        app.use(cookieParser());

        
        app.use('/apis/events', events);
        app.use('/auth', auth);

        if (process.env.NODE_ENV === 'production') {
            app.use(express.static('client/build'));

            app.get('*', (req,res) => {
                res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
            });

        } 

        const port = process.env.PORT || 5000;

        app.listen(port, () => console.log(`Server started on port ${port}`));
    })