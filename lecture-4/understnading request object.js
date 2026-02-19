const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.end("Server will close now");

  server.close(() => {
    console.log("Server closed");
  });
});

const port = 3001;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});