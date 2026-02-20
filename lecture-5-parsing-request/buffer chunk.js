const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
        `
        <form action="/submit" method="POST">
          <input type="text" name="username" placeholder="Enter your name" />
          <button type="submit">Submit</button>
        </form>
        
        `
    )
    return res.end();
  } else if (req.url === "/submit") {
    res.write("Welcome to the Submit Page");
    let body = [];
    req.on("data", (chunk)=>{
        body.push(chunk);
    })
    req.on("end",()=>{
        body = Buffer.concat(body).toString();
        console.log("Received form data:", body);
    })
    
  } else {
    res.write("404 Not Found");
  }
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});