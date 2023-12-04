const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/users");
const userAuth = require("./routes/auth");
const postRoute = require("./routes/post");

const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", userAuth);
app.use("/api/posts", postRoute);

// port & mongo
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
