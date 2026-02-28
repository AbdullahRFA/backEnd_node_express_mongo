const express = require('express');
const path = require('path');
const rootDir = require("./utils/pathUtils");

const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");

const errorControllers = require("./controllers/error");

const app = express();

app.set("view engine","ejs");
app.set("views","views");

app.use(express.static(path.join(rootDir,"public")));
app.use(express.urlencoded({extended:true}));

app.use(homeRoutes);
app.use(userRoutes);
app.use(errorControllers.pageNotFound);




const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
})