const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

// MongoDB Connection
const DB_Connection = require("./config/DB_Config");

// User model
const User = require("./models/User");

// Public folder setup
app.use("/public", express.static(path.join(__dirname, "public")));

// Express-handlebars setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Routes
app.use("/", require("./routes/static"));

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`URL - http://localhost:${PORT}`));
