const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request received for:", req.url);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end("<h1>Hello Abhi</h1>");
    } else if (req.url === '/pizza') {
        res.statusCode = 200;
        res.end("<h1>Pizza Takeout</h1>");
    }
    else if (req.url === '/home') {
        res.statusCode = 200;
        res.end("<h1>Welcome home</h1>");
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end("<h1>Welcome to About us</h1>");
    }
    else if (req.url === '/hello') {
        res.statusCode = 200;
        res.end("<h1>Welcome to my Node js project</h1>");
    }
    else {
        res.statusCode = 404;
        res.end("<h1>Page not found</h1>");
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
