const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `
        <form action="/submit" method="POST">
          <input type="text" name="username" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input type="password" name="password" placeholder="Enter your password" />
          <button type="submit">Submit</button>
        </form>
        
        `,
    );
    return res.end();
  } else if (req.url === "/submit" && req.method === "POST") {

  let body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {

    body = Buffer.concat(body).toString();

    const params = new URLSearchParams(body);
    const bodyObject = Object.fromEntries(params.entries());

    console.log("Parsed form data:", bodyObject);

    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Form submitted successfully</h1>`);
    res.write(`<p>Name: ${bodyObject.username}</p>`);
    res.write(`<p>Email: ${bodyObject.email}</p>`);

    res.end(); // ✅ Correct place
  });

  return;
} else {
    res.write("404 Not Found");
  }
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
