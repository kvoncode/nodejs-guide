const http = require("http");

const hostname = "127.0.0.1";

const port = "3000";

const requestListener = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
};

const server = http.createServer(requestListener);

const callback = () => {
    console.log(`Server running at http://${hostname}:${port}`)
}
server.listen(port, hostname, callback)
