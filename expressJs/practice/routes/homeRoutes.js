const express = require('express');
const homeRoutes = express.Router();

homeRoutes.use((req, res, next)=>{
    console.log("This is the first middleware function");
    console.log(req.url);
    console.log(req.method);
    next();
    // res.send("<h1>Congratulations from Express server</h1>")
})

homeRoutes.use((req,res,next)=>{
    console.log("This is the second middleware function");
    console.log(req.url);
    console.log(req.method);
    next();
    // res.send("<h1>Congratulations from Express server</h1>")
})



homeRoutes.get("/",
    (req,res,next)=>{
        console.log("Handling GET request for /");
        console.log(req.method);
        res.send(`<h1>Handling GET request for slash</h1>`)
        next();
    })


module.exports = homeRoutes;