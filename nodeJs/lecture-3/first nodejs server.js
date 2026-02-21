const http = require("http");

function requestListener(req, res) {
  console.log(req.url);
  
  res.write("Hello from Node server");
  res.end();
}

const server = http.createServer(requestListener);

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});