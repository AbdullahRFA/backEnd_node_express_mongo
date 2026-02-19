const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(`<!DOCTYPE html>
      <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome to the Home Page</h1>

        <form method="POST" action="/submit">
          <input type="text" name="username" placeholder="Enter your name" />
          <button type="">Submit</button>
        </form>

      </body>
      </html>
    `);

    return res.end();

  } else if (req.url === "/about" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the About Page");

  } else if (req.url === "/submit" && req.method === "POST") {

    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log("Received form data:", body);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Form submitted successfully");
    });

  }
  else {

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");

  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});