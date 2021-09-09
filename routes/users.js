const express = require('express');
const User = require('../models/user');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// SIGN UP 
router.post('/signup', (req, res, next) => {
  User.findOne({username: req.body.username}) // to see if there are any existing user docs
  .then(user => {
      if (user) { // IF USER is already exist
        const err = new Error(`User ${req.body.username} already exists`);
        err.status = 403;
        return next(err);
      } else {
        User.create({
          username: req.body.username,
          password: req.body.password
        })
        .then(user => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({status: 'Registration Successful!', user:user});
        })
      .catch(err => next(err)); // for catching any error
    }
  })
  .catch(err => next(err)); // findOne method returned a rejected promise
});

//LOGIN //
router.post('/login', (req,res, next) => {
  if(!req.session.user) { // automatically filled in contained a cookie w/ an existing session id
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        const err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }
        //username and password 
        const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        const username = auth[0];
        const password = auth[1];

        User.findOne({username: username})
        .then(user => {
          if(!user) {
            // DOES NOT EXIST
            const err = new Error(`User ${username} does not exist!`);
            err.status = 401;
            return next(err);

            // PSWD IS INCORRECT 
          } else if (user.password !== password) {
            const err = new Error('Your password is incorrect!');
            err.status = 401;
            return next(err);

            // AUTHENTICATED
        } else if (user.username === username && user.password === password) {
            req.session.user = 'authenticated';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('You are authenticated!')
        }
    })
    .catch(err => next(err));
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You are already authenticated');
  }

//LOGOUT
router.get('./logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    req.clearCookie('session-id');
    res.redirect('/');
  } else {
    const err = new Error('You are not logged in!');
    err.status = 401;
    return next(err);
  }
});


});


module.exports = router;
