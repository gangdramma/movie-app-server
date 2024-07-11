const Movie = require("../models/Movie");

const addMovie = async (req, res) => {
  const { title, description, thumbnail, rate, genre } = req.body;
  try {
    const movie = new Movie({ title, description, thumbnail, rate, genre });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const addEpisode = async (req, res) => {
  const { id } = req.params;
  const { title, video, description, duration } = req.body;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    movie.episodes.push({ title, video, description, duration });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("genre");
    res.json(movie);
  } catch (err) {
    res.status(404).json({ message: "Movie not found" });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("genre");
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addMovie, addEpisode, getMovie, getAllMovies };
