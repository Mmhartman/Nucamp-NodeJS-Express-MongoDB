const express = require('express');
const User = require('../models/user');
const passport = require('passport');

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// SIGN UP 
router.post('/signup', (req, res) => {
   User.register(
     new User({username: req.body.username}), // 1st argument
     req.body.password, // 2nd argument
     err => { // 3rd argument callback method -> start
       if (err) {
         res.statusCode = 500;
         res.setHeader('Content-Type', 'application/json');
         res.json({err: err});
       } else {
         passport.authenticate('local')(req, res, () => {
           res.statusCode = 200;
           res.setHeader('Content-Type', 'application/json');
           res.json({success: true, status: 'Registration Successful!'});
         });
       }
     } // callback method -> end
   )
});

//LOGIN //
router.post('/login', passport.authenticate('local'), (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, status: 'You are successfully logged in!'});
  });

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




module.exports = router;
