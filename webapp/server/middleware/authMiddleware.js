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