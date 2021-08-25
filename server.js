const http = require('http');

const hostname = 'localhost';
const port = 3000;

const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {  // request handlers req,res
   
    console.log(`Request for ${req.url} by method ${req.method}` );

    if (req.method === 'GET') {
        let fileUrl = req.url; // local variable 
        if (fileUrl === '/') { // if it's true '/' will send to file index.html //
            fileUrl = '/index.html';
        }
    
        // store path in variable. 
        // path.resolve convert from a relative path to an absolute path
        const filePath = path.resolve('./public' + fileUrl); 

        // path.extname to parse out the extension from the file path
        const fileExt = path.extname(filePath);

        if (fileExt === '.html') {
            fs.access(filePath, err => {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
                    return; // so that the code after this is not executed // 
                }
                res.statusCode= 200; // successful response code
                res.setHeader('Content-Type', 'text/html');

                fs.createReadStream(filePath).pipe(res); 
                // reading the content of the file that is given in small chunks. flatlist like lazy loading comparison// 
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${fileUrl} is not an HTML file</h1></body></html>`);
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`);
    }
});

server.listen(port, hostname, () => { // callback function that will be executed when the server starts up //
    console.log(`Server running at http://${hostname}:${port}/`);
});