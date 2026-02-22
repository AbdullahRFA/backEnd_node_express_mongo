// core modules
const http = require("http");
// local modules
const requestHandler = require("./requestHandler");
//external modules
const express = require("express");

const app = express();

app.use(
    (req,res,next)=>{
        console.log("This is a first middleware function");
        console.log(req.method);
        next();
    }
)
app.use(
    (req,res,next)=>{
        console.log("This is a second middleware function");
        console.log(req.url);
        // next();
    }
)
const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});