const resultPage = (result) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Result</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .container { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.08); text-align: center; min-width: 300px; }
          h1 { color: #7f8c8d; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; }
          .result-box { font-size: 56px; font-weight: 700; color: #27ae60; margin: 20px 0 30px 0; word-break: break-all; }
          .btn { display: inline-block; width: 100%; padding: 14px; background-color: #3498db; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; transition: background 0.3s; box-sizing: border-box; }
          .btn:hover { background-color: #2980b9; }
          .back-link { display: inline-block; margin-top: 20px; text-decoration: none; color: #95a5a6; font-size: 14px; transition: color 0.3s; }
          .back-link:hover { color: #3498db; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Calculation Result</h1>
          <div class="result-box">${result}</div>
          <a href="/calculate" class="btn">Calculate Again</a>
          <br>
          <a href="/" class="back-link">← Return to Main Menu</a>
        </div>
      </body>
      </html>
    `;
};

module.exports = resultPage;