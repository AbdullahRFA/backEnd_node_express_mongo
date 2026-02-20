const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`<!DOCTYPE html>
  <html>
  <head>
    <title>Shop Home</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f4f6f9;
      }

      .navbar {
        background: #2c3e50;
        padding: 15px;
        display: flex;
        gap: 20px;
      }

      .navbar a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }

      .navbar a:hover {
        color: #1abc9c;
      }

      .container {
        padding: 40px;
        text-align: center;
      }

      .cards {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 30px;
      }

      .card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        width: 200px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .card h3 {
        margin: 10px 0;
      }

      .btn {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 15px;
        background: #1abc9c;
        color: white;
        border-radius: 5px;
        text-decoration: none;
      }

      .btn:hover {
        background: #16a085;
      }
    </style>
  </head>

  <body>

    <div class="navbar">
      <a href="/home">Home</a>
      <a href="/men">Men</a>
      <a href="/women">Women</a>
      <a href="/kids">Kids</a>
      <a href="/cart">Cart</a>
    </div>

    <div class="container">
      <h1>Welcome to Online Shop 🛒</h1>
      <p>Select a category to explore products</p>

      <div class="cards">
        <div class="card">
          <h3>Men</h3>
          <p>Latest fashion for men</p>
          <a class="btn" href="/men">Shop Now</a>
        </div>

        <div class="card">
          <h3>Women</h3>
          <p>Trendy styles for women</p>
          <a class="btn" href="/women">Shop Now</a>
        </div>

        <div class="card">
          <h3>Kids</h3>
          <p>Cute collections for kids</p>
          <a class="btn" href="/kids">Shop Now</a>
        </div>
      </div>
    </div>

  </body>
  </html>`);

    return res.end();
  } else if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Welcome to the Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><title>Men Page</title></head>");
    res.write("<body><h1>Welcome to the Men Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><title>Women Page</title></head>");
    res.write("<body><h1>Welcome to the Women Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><title>Kids Page</title></head>");
    res.write("<body><h1>Welcome to the Kids Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/cart") {
    res.setHeader("Content-Type", "text/html");
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><title>Cart Page</title></head>");
    res.write("<body><h1>Welcome to the Cart Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
