const http = require("http");

const requestHandler = require("./handleUserRequest");

const server = http.createServer(requestHandler);
const port = 3001; 

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});