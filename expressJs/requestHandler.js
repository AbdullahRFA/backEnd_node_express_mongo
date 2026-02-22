
const requestHandler = (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head><title>Node Server</title></head>");
  res.write("<body><h1>Hello from Node server</h1></body>");

  res.write("</html>");
  return res.end();
}

module.exports = requestHandler;