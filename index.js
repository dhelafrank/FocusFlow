const express = require("express");
const app = express();
const path = require("path");
const RenderModel = require(path.join(__dirname, "models/renderModel"));
const PORT = process.env.PORT || 5000;

// Middlewares
app.set("view engine", "ejs");
app.use(express.static("asset"));


const renderModel = new RenderModel(app);
renderModel.initializeRoutes();

// Root route
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});
