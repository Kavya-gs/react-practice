import http from 'http';

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);

    // Routing Requests
    if(req.url === '/'){
            res.setHeader('Content-Type','text/html');
            res.write('</html>');
            res.write('<head><title>Hello</title></head>');
            res.write('<body><h1>Welcome to  home Page</h1></body>')
            res.write('</html>');
            return res.end();
        }
        else if (req.url === '/products') {
            res.setHeader('Content-Type','text/html');
            res.write('</html>');
            res.write('<head><title>Hello</title></head>');
            res.write('<body><h1>Check our Products</h1></body>')
            res.write('</html>');
            return res.end();
        }
        else {
            res.setHeader('Content-Type','text/html');
            res.write('</html>');
            res.write('<head><title>Hello</title></head>');
            res.write('<body><h1>Thankyou</h1></body>')
            res.write('</html>');
            res.end();
        }
    }
);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});