//Core Modules
const path = require("path");

//External Modules
const express = require("express");


// Local Modules
const userRoutes = require("./routes/userRoutes");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");


const app = express();

app.use( userRoutes);

app.use(express.urlencoded({extended:true}) );

app.use("/host", hostRouter);




app.use((req, res, next) => {
  
    res.status(404).sendFile(path.join(rootDir, "./views/404.html"));
});



const post = 3000;
app.listen(post, () => {
  console.log(`Server is listening at http://localhost:${post}`);
});
