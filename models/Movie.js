const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  rate: { type: Number, required: true },
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre", required: true },
});

module.exports = mongoose.model("Movie", movieSchema);
