const express = require("express");
const router = express.Router();
const {
  addMovie,
  addEpisode,
  getMovie,
  getAllMovies,
  getAllMovieEpisodes,
  getEpisodeById,
  addFavoriteMovie,
  getUserFavorites,
  addGenresToUser,
  getUserGenres,
} = require("../controllers/movieController");

router.post("/movies", addMovie);
router.post("/movies/:id/episodes", addEpisode);
router.get("/movies/:id", getMovie);
router.get("/movies", getAllMovies);
router.get("/movies/:movieId/episodes", getAllMovieEpisodes);
router.get("/movies/:movieId/episodes/:episodeId", getEpisodeById);
router.post("/users/:userId/favorites/:movieId", addFavoriteMovie);
router.get("/users/:userId/favorites", getUserFavorites);
router.post("/users/:userId/genres", addGenresToUser);
router.get("/users/:userId/genres", getUserGenres);

module.exports = router;
