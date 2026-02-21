const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  if (req.url === "/") {
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Welcome to the Home Page</h1></body>");
  } else if (req.url === "/about") {
    res.write("<head><title>About Page</title></head>");
    res.write("<body><h1>Welcome to the About Page</h1></body>");
  } else {
     res.write("<head><title>404 Not Found</title></head>");
    res.write("<body><h1>404 Not Found</h1></body>");
  }
  

  res.write("</html>");
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
