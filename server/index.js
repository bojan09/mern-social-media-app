const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const mongoURI = process.env.DB_URI;

mongoose
  .connect(mongoURI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} MongoDB not connected`));

app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`);
});
