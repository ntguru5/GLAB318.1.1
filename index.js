// Part 4: Creating a Server
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // default response header
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        // default route
        res.statusCode = 200;
        res.write('<h1 style="color: blue">Hello World!</h1>');
        res.write('<p>This is the default page.</p>');
        res.end();

      // About route ("/about")
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.write('<h1>About Us</h1>');
        res.write('<p>We are exploring Node.js routing!</p>');
        res.end();
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.write('<h1>Contact Us</h1>');
        res.write(`
            <form method="POST" action="/submit">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name">
            <button type="submit">Send</button>
            </form>
        `);
        res.end();

  // 404 route for any undefined paths
    } else {
    res.statusCode = 404;
    res.write('<h1>404 Not Found</h1>');
    res.write('<p>The page you are looking for does not exist.</p>');
    res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
