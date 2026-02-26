const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {

  res.send(`
        <h1>Register Your Home</h1>
        <form action="/add-home" method="POST">
          <input type="text" name="homeName" placeholder="Enter home name" />
          <input type="text" name="location" placeholder="Enter location" />
          <button type="submit">Submit</button>
        </form>
        <a href="/">Go Back</a>
        `);
        
});

hostRouter.post("/add-home", (req, res, next) => {

  res.send(`
        <h1>Home Registered Successfully</h1>
        <p>Home Name: ${req.body.homeName}</p>
        <p>Location: ${req.body.location}</p>
        <a href="/">Go Back</a>
        `);
        
});

module.exports = hostRouter;