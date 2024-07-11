const express = require("express");
const {
  addMovie,
  addEpisode,
  getMovie,
  getAllMovies,
  getAllMovieEpisodes,
  getEpisodeById,
} = require("../controllers/movieController");
const router = express.Router();

router.post("/movies", addMovie);
router.post("/movies/:id/episodes", addEpisode);
router.get("/movies/:id", getMovie);
router.get("/movies", getAllMovies);
router.get("/movies/:movieId/episodes", getAllMovieEpisodes);
router.get("/movies/:movieId/episodes/:episodeId", getEpisodeById);

module.exports = router;
