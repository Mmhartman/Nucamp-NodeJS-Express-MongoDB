const express = require('express');
const promotionRouter = express.Router();


promotionRouter.route('/') // path ('/')

.all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // pass control app routing to the next relevant routing method.
})

.get((req, res) => {
    res.end('Will send all the promotions to you');
})

.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})

.delete((req, res) => { 
    res.end('Deleting all promotions');
});




//TASK 2
promotionRouter.route('/:promotionId')
.all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
})

.get((req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions');
})

.put((req, res) => {
   res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})

.delete((req, res) => { // normally a dangerous operation
    res.end(`Deleting promotion: ${req.params.promotionId}`);
});


module.exports = promotionRouter;