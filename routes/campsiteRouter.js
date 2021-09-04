const express = require('express');
<<<<<<< HEAD
const campsiteRouter = express.Router();

campsiteRouter.route('/') // path ('/')

// Single statements that handles all the endpoints for routing to campsites
.all((req, res, next) => { // first class functions?
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // pass control app routing to the next relevant routing method.
})

.get((req, res) => {
    res.end('Will send all the campsites to you');
})

.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})

=======
const Campsite = require('../models/campsite');

const campsiteRouter = express.Router();

campsiteRouter.route('/')
.get((req, res, next) => {
    Campsite.find()
    .then(campsites => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsites);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Campsite.create(req.body)
    .then(campsite => {
        console.log('Campsite Created ', campsite);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
>>>>>>> 3d267ee (Express REST API with MongoDB and Mongoose Part 1)
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
<<<<<<< HEAD

.delete((req, res) => { // normally a dangerous operation
    res.end('Deleting all campsites');
});

// TASK 1
campsiteRouter.route('/:campsiteId')
.all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
})

.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`)
})

.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /campsites');
})

.put((req, res) => {
   res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})

.delete((req, res) => { // normally a dangerous operation
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});


=======
.delete((req, res, next) => {
    Campsite.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

campsiteRouter.route('/:campsiteId')
.get((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
.put((req, res, next) => {
    Campsite.findByIdAndUpdate(req.params.campsiteId, {
        $set: req.body
    }, { new: true })
    .then(campsite => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsite);
    })
    .catch(err => next(err));
})
.delete((req, res, next) => {
    Campsite.findByIdAndDelete(req.params.campsiteId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

>>>>>>> 3d267ee (Express REST API with MongoDB and Mongoose Part 1)
module.exports = campsiteRouter;