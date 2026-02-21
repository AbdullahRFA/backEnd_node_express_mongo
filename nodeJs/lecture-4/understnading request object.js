const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
  res.write("Hello from Node server");
  // res.end();
  // process.exit();

});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});