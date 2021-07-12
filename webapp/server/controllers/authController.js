const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/authuser.config');

function handleError(err) {
    console.log(err.message, err.code);
    let errors = { username: '', email: '', password: '' };

    // incorrect username
    if (err.message === 'Incorrect username!') {
        errors.username = 'Username is not registered!';
        return errors;
    }

    // incorrect password
    if (err.message === 'Incorrect password!') {
        errors.password = 'Incorrect password!';
        return errors;
    }

    // duplicate error code
    if (err.code === 11000) {
        if (err.message.includes('email_1 dup key')) {
            errors.email = 'This email is already registered!';
            return errors;
        }
        if (err.message.includes('username_1 dup key')) {
            errors.username = 'This username is already registered!';
            return errors;
        }
    }

    // validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

const createToken = (id) => {
    return jwt.sign({ id }, config.secret, {
        expiresIn: 3*24*60*60
    })
}

module.exports.logIn = async (req, res) => {
    try {
        const user = await User.login({
            username: req.body.username,
            password: req.body.password
        });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleError(err);
        res.status(400).json({ errors })
    }
}

module.exports.SignUp = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name, 
            username: req.body.username, 
            email: req.body.email, 
            password: req.body.password, 
            city: req.body.city, 
            country: req.body.country 
        });
        const result = await user.save();
        const token = createToken(result._id);
        res.cookie('jwt', token, { 
            httpOnly: true, 
            maxAge: 3*24*60*60*1000
        })
        res.status(201).json({
            user: result._id
        });

    } catch (err) {
        const errors = handleError(err);
        res.status(400).json({ errors });

    }
}