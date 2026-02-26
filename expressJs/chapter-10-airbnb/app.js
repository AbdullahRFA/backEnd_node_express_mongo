//Core Modules
const path = require("path");

//External Modules
const express = require("express");


// Local Modules
const userRoutes = require("./routes/userRoutes");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); // tells express where your templates are located. By default, it looks for a folder named "views" in the root directory of your project. If your templates are in a different folder, you can specify the path here.




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
