const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res) => { // MIDDLEWARE FUNCTON
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

// CREATE A SERVER AND START LISTENING TO IT // 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});