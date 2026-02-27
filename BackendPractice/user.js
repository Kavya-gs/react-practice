import http from 'http';
import fs from 'node:fs';
// const http = require('http');

// const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Routing Requests
    if(req.url === '/'){
            res.setHeader('Content-Type','text/html');
            res.write('</html>');
            res.write('<head><title>Hello</title></head>');
            res.write('<body><h1>Enter your details: </h1>')
            res.write('<form action="/submit-details" method="Post" >');
            res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
            res.write('<label for="male">Male</label>');
            res.write('<input type="radio" id="male" name="gender" value="male" />');
            res.write('<label for="female">Female</label>');
            res.write('<input type="radio" id="female" name="gender" value="female" />');
            res.write('<br><input type="submit" value="Submit">');
            res.write('</form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        }
        else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST") {
            const body = [];
            req.on('data', chunk => {
                console.log(chunk);
                body.push(chunk);
            });
            req.on('end', () => {
                const fullBody = Buffer.concat(body).toString();
                console.log(fullBody);
                const params = new URLSearchParams(fullBody);
                // const bodyObject = {};
                // for(const [key, val] of params.entries()) {
                //     bodyObject[key] = val;
                // }
                const bodyObject = Object.fromEntries(params);
                console.log(bodyObject);
            });
            fs.writeFileSync('user.txt', 'Kavya');
            res.statusCode = 302;
            res.setHeader('Location', '/');
        }
        res.setHeader('Content-Type','text/html');
        res.write('</html>');
        res.write('<head><title>Hello</title></head>');
        res.write('<body><h1>Thankyou</h1></body>')
        res.write('</html>');
        res.end();
    }
);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});