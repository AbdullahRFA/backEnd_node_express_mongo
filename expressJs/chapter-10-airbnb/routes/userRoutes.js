//Core Modules

const path = require("path");

//External Modules
const express = require("express");

const userRoutes =express.Router();

const rootDir = require("../utils/pathUtils");



userRoutes.get("/", (req, res, next) => {

  res.sendFile(path.join(rootDir, "./views/home.html"));
});

userRoutes.use((req, res, next) => {
  console.log("This is a middleware path function");
  console.log("Path: ",req.url);
  console.log("Method: ",req.method);
  next();
  // res.send("<h1>Congratulations from Express server</h1>")
});

module.exports = userRoutes;