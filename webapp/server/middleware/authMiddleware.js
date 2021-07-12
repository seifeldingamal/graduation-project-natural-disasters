const jwt = require('jsonwebtoken');
const config = require('../config/authuser.config');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check if jsonWebToken exists
    if (token) {
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                next('/login')
            } else {
                console.log(decodedToken)
                next();
            }
        })
    } else {
        next('/login')
    }
}

module.exports = { requireAuth };