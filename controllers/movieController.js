const Movie = require("../models/Movie");
const User = require("../models/User");

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
  const { title, video, description, duration, poster } = req.body;

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    movie.episodes.push({ title, video, description, duration, poster });
    await movie.save();

    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
      .populate("genre")
      .populate("episodes");
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
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

const getAllMovieEpisodes = async (req, res) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findById(movieId).populate("episodes");
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie.episodes);
  } catch (err) {
    res.status(404).json({ message: "Movie not found" });
  }
};

const getEpisodeById = async (req, res) => {
  const { movieId, episodeId } = req.params;
  try {
    const movie = await Movie.findById(movieId).populate({
      path: "episodes",
      match: { _id: episodeId },
    });
    if (!movie || !movie.episodes.length) {
      return res.status(404).json({ message: "Episode not found" });
    }
    const episode = movie.episodes[0];
    res.json(episode);
  } catch (err) {
    res.status(404).json({ message: "Episode not found" });
  }
};

const addFavoriteMovie = async (req, res) => {
  const { userId, movieId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.favorites.includes(movieId)) {
      user.favorites.push(movieId);
      await user.save();
    }

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate("favorites");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addMovie,
  addEpisode,
  getMovie,
  getAllMovies,
  getAllMovieEpisodes,
  getEpisodeById,
  addFavoriteMovie,
  getUserFavorites,
};
