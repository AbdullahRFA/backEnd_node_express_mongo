const express = require("express");

const userRoutes =express.Router();


userRoutes.get("/", (req, res, next) => {

  res.send(`
        <h1>Welcome to AirBnB</h1>
        <a href="/host/add-home">Add Home</a>
        `);
//   next();
});

userRoutes.use((req, res, next) => {
  console.log("This is a middleware path function");
  console.log("Path: ",req.url);
  console.log("Method: ",req.method);
  next();
  // res.send("<h1>Congratulations from Express server</h1>")
});

module.exports = userRoutes;