const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use((req, res, next)=>{
    console.log("This is the first middleware function");
    console.log(req.url);
    console.log(req.method);
    next();
    // res.send("<h1>Congratulations from Express server</h1>")
})

app.use((req,res,next)=>{
    console.log("This is the second middleware function");
    console.log(req.url);
    console.log(req.method);
    next();
    // res.send("<h1>Congratulations from Express server</h1>")
})

// app.use((req,res,next)=>{
//     console.log("This is a third middleware function");
//     console.log(req.url);
//     console.log(req.method);
//     res.send("<h1>Congratulations from Express server</h1>")
//     // next();
// })


app.get("/",
    (req,res,next)=>{
        console.log("Handling GET request for /");
        console.log(req.method);
        res.send(`<h1>Handling GET request for slash</h1>`)
        next();
    })

app.get("/contact-us",(req,res,next)=>{
    console.log("Handling GET request for /contact-us");
    console.log(req.method);
    res.send(
        `
        <h1>Please give your contact information</h1>
        <form action="/contact-us" method="POST">
          <input type="text" name="username" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <button type="submit">Submit</button>
        </form>
        
        `
    )
})

app.use(bodyParser.urlencoded())

app.post("/contact-us",(req,res,next)=>{
    console.log("Handling POST request for /contact-us");
    console.log(req.method);
    console.log(req.body);
    console.log("Usrname:", req.body.username);
    console.log("Email:", req.body.email);
    res.send(`
        <h1>Thank you for submitting your contact information</h1>
        `)
    
})


const port = 3000;
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})