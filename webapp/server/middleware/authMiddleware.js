const jwt = require('jsonwebtoken');
const config = require('../config/authuser.config');
const User = require('../models/User');

const requireAuth = (req, res) => {
  const token = req.cookies.jwt;

  // check if jsonWebToken exists
  if (token) {
    jwt.verify(token, config.secret, (err, decodedToken) => {
      if (err) {
        //console.log(err.message);
        res.json({
          auth: false
        });
      } else {
        //console.log(decodedToken)
        res.json({
          auth: true
        });
      }
    })
  } else {
    res.json({
      auth: false
    });
  }
};

module.exports = { requireAuth };