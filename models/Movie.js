const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  title: String,
  video: String,
  description: String,
  duration: Number,
});

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
    required: true,
  },
  episodes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Episode" }, // Ensure correct definition of subdocument schema
  ],
});

module.exports = mongoose.model("Movie", movieSchema);
