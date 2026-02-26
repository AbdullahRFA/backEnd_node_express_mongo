//Core Modules
const path = require("path");


//External Modules
const express = require('express');
const hostRouter = express.Router();

//Local Modules
const rootDir = require("../utils/pathUtils");


hostRouter.get("/add-home", (req, res, next) => {

    

  res.sendFile(path.join(rootDir, "./views/addHome.html"));
        
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Received Home name: ", req.body.homeName);
    console.log("Received Home location: ", req.body.location);

    // Make sure you are passing the data object here!
    res.render("homeAdded", { 
        homeName: req.body.homeName, 
        location: req.body.location 
    });       
});

module.exports = hostRouter;