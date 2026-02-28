const express = require("express");

const contactRoutes = express.Router();

const path = require("path");

const rootDir = require("../utils/pathUtils");

contactRoutes.get("/contact-us",(req,res,next)=>{
    console.log("Handling GET request for /contact-us");
    console.log(req.method);

    res.sendFile(path.join(rootDir, "./views/form.html"));

})



contactRoutes.post("/contact-us",(req,res,next)=>{
    console.log("Handling POST request for /contact-us");
    console.log(req.method);
    console.log(req.body);
    console.log("Usrname:", req.body.username);
    console.log("Email:", req.body.email);
    
    res.sendFile(path.join(rootDir, "./views/confirm.html"));
    
})

module.exports = contactRoutes;