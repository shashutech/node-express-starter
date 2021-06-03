const express = require("express");

// MongoDB Connection
const DB_Connection = require("./config/DB_Config");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Homepage");
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`URL - http://localhost:${PORT}`));
