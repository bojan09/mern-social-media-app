const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const userRoute = require("./routes/users");
const userAuth = require("./routes/auth");

const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
app.get("/", (req, res) => {
  res.send("Hello world ");
});

app.use("/api/users", userRoute);
app.use("/api/auth", userAuth);

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
