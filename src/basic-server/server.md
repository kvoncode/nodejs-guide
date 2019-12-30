# Basic server

You can create server in **Node.js** using `http` module

`const http = require('http')`

To create server use `createServer()` function

`http.createServer(requestLintener)`, where `requestLintener` is a function which will be called on **request** event, with `req, res` being `http.ClientRequest http.ServerResponse` classes accordingly

We can set **status code, headers, and content** accordingly

```
res.statusCode = 200;
res.setHeader("Content-Type", "text/plain");
res.end("Hello World\n");
```

In order to start listening we should use `server.listen` function

```
server.listen(port, hostname, callback)
```
