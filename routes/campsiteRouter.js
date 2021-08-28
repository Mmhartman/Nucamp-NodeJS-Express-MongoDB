const express = require('express');
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

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})

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


module.exports = campsiteRouter;