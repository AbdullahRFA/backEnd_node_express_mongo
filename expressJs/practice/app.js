const express = require("express");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/homeRoutes");
const contactRoutes = require("./routes/contactRoutes");

const rootDir = require("./utils/pathUtils");
const path = require("path");
const app = express();

app.use(homeRoutes);

// app.use(bodyParser.urlencoded())

app.use(express.urlencoded({ extended: true }));

app.use(contactRoutes);

app.use((req, res, next) => {
    
    res.status(404).sendFile(path.join(rootDir, "./views/404.html"));
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
