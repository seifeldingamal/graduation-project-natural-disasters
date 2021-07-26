const jwt = require('jsonwebtoken');
const config = require('../config/authuser.config');

const requireAuth = (req, res) => {
  const token = req.cookies.jwt;

  // check if jsonWebToken exists
  if (token) {
    jwt.verify(token, config.secret, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.json({
          auth: true
        });
      } else {
        console.log(decodedToken)
        res.json({
          auth: false
        });
      }
    })
  } else {
    res.json({
      auth: true
    });
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, config.secret, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { checkUser, requireAuth };