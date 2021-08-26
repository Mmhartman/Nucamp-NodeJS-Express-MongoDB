const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev')); // MORGAN MIDDLEWARE

app.use(express.static(__dirname + '/public'));


app.use((req, res) => { // MIDDLEWARE FUNCTiON  
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

// CREATE A SERVER AND START LISTENING TO IT // 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});