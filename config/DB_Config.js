const mongoose = require("mongoose");

// Enter the connection string to local or remote MongoDB database
const URI = "";

// Conncting to MongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("DB error - " + err);
  });
