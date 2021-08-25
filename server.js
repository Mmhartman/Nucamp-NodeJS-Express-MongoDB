const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {  // request handlers req,res
   
    console.log(req.headers);
    res.statusCode= 200; // 200 means everything is okay //
    res.setHeader('Content-Type', 'text/html'); 
    res.end('<html><body><h1>Hello World!</h1></body></html>');
});

server.listen(port, hostname, () => { // callback function that will be executed when the server starts up //
    console.log(`Server running at http://${hostname}:${port}/`);
});