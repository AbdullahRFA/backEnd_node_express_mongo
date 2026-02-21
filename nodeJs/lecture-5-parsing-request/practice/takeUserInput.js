const add = require("./calculatation");
const resultPage = require("./resultPage");

const userInput = (req, res) => {
    if (req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Enter Input</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
              .container { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); width: 100%; max-width: 350px; text-align: center; }
              h1 { color: #2c3e50; font-size: 24px; margin-top: 0; margin-bottom: 25px; }
              input { width: 100%; padding: 14px; margin-bottom: 15px; border: 1px solid #dcdde1; border-radius: 6px; box-sizing: border-box; font-size: 16px; transition: border-color 0.3s; background-color: #fbfbfb; }
              input:focus { border-color: #3498db; outline: none; background-color: #fff; box-shadow: 0 0 5px rgba(52, 152, 219, 0.2); }
              button { width: 100%; padding: 14px; margin-top: 10px; background-color: #3498db; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; transition: background 0.3s, transform 0.1s; font-weight: 600; }
              button:hover { background-color: #2980b9; transform: translateY(-1px); }
              .back-link { display: inline-block; margin-top: 20px; text-decoration: none; color: #95a5a6; font-size: 14px; transition: color 0.3s; }
              .back-link:hover { color: #3498db; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Enter Your Numbers</h1>
              <form method="POST" action="/calculate">
                <input type="number" step="any" name="userInput" placeholder="First number" required />
                <input type="number" step="any" name="userInput2" placeholder="Second number" required />
                <button type="submit">Calculate</button>
              </form>
              <a href="/" class="back-link">← Back to Home</a>
            </div>
          </body>
          </html>
        `);
        res.end();
    } 
    else if (req.method === "POST") {  
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        
        req.on("end", () => {
            body = Buffer.concat(body).toString();
            
            const params = new URLSearchParams(body);
            const userInput1 = parseFloat(params.get("userInput"));
            const userInput2 = parseFloat(params.get("userInput2"));
            
            const result = add(userInput1, userInput2);

            res.setHeader("Content-Type", "text/html");
            res.write(resultPage(result));
            res.end();
        });
    }
};

module.exports = userInput;