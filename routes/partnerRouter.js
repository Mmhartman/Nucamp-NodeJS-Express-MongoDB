const express = require('express');
const partnerRouter = express.Router();


partnerRouter.route('/') // takes the home route

.all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // pass control app routing to the next relevant routing method.
})

.get((req, res) => {
    res.end('Will send all the partners to you');
})

.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})

.delete((req, res) => { 
    res.end('Deleting all partners');
});

// TASK  3
partnerRouter.route('/:partnerId')
.all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
})

.get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /partners');
})

.put((req, res) => {
   res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})

.delete((req, res) => { // normally a dangerous operation
    res.end(`Deleting partner: ${req.params.partnerId}`);
});



module.exports = partnerRouter;