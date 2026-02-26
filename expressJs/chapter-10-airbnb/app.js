//External Modules
const express = require("express");


// Local Modules
const userRoutes = require("./routes/userRoutes");
const hostRouter = require("./routes/hostRouter");

// const bodyParser = require("body-parser");

const app = express();

app.use(userRoutes);

app.use(express.urlencoded({extended:true}) );


app.use(userRoutes);

app.use(hostRouter);


// app.use(bodyParser.urlencoded({ extended: true }));

app.use(hostRouter);

app.use((req, res, next) => {
  
    res.status(404).send(`
        <h1>Page Not Found</h1>
        <a href="/">Go Home</a>
        `); 
});



const post = 3000;
app.listen(post, () => {
  console.log(`Server is listening at http://localhost:${post}`);
});
