const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head><title>Node Server</title></head>");
  res.write("<body><h1>Hello from Node server</h1></body>");

  res.write("</html>");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
