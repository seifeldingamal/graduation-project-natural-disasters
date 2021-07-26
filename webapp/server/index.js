const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser'); 
const path = require('path');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

mongoose
    .connect('mongodb+srv://admin:admin@main.llv7l.mongodb.net/NaturalApp?retryWrites=true&w=majority', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => {
        const app = express();

        // Middleware
        app.use(bodyParser.json());
        app.use(cors());
        app.use(cookieParser())

        const events = require('./routes/api/events');

        app.use('/apis/events', events);

        const auth = require('./routes/authUser');

        app.use('/auth', auth);

        if (process.env.NODE_ENV === 'production') {
            app.use(express.static(path.resolve(__dirname,'client/build')));

            app.get('*', [checkUser] ,(req,res) => {
                res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
            })

        } 

        const port = process.env.PORT || 5000;

        app.listen(port, () => console.log(`Server started on port ${port}`));
    })