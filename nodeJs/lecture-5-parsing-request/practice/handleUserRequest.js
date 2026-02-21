const userInput = require("./takeUserInput");

const userRequestHandler = (req, res) => {
  if(req.url === "/"){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator App</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .container { background: white; padding: 50px 40px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); text-align: center; max-width: 400px; width: 100%; }
          h1 { color: #2c3e50; margin-top: 0; font-size: 28px; }
          p { color: #7f8c8d; margin-bottom: 30px; font-size: 16px; }
          .btn { display: inline-block; width: 80%; padding: 14px; background-color: #3498db; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; transition: background 0.3s, transform 0.1s; box-sizing: border-box;}
          .btn:hover { background-color: #2980b9; transform: translateY(-1px); }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome</h1>
          <p>A fast, simple Node.js calculation tool.</p>
          <a href="/calculate" class="btn">Launch Calculator</a>
        </div>
      </body>
      </html>
    `);
    res.end();
  } else if(req.url === "/calculate"){
    userInput(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<div style='text-align:center; padding:50px; font-family:sans-serif;'><h1>404 Not Found</h1><a href='/'>Go Home</a></div>");
  }
}

module.exports = userRequestHandler;