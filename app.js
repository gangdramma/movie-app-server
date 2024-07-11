const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const genreRoutes = require("./routes/genreRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", movieRoutes);
app.use("/api/v1", genreRoutes);

mongoose
  .connect(
    "mongodb+srv://music:971584440@musicserver.izbntx2.mongodb.net/?retryWrites=true&w=majority&appName=musicserver"
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
