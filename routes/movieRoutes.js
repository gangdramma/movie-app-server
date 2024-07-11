const express = require("express");
const {
  addMovie,
  addEpisode,
  getMovie,
  getAllMovies,
  getEpisodeById, // Import the new controller method
} = require("../controllers/movieController");
const router = express.Router();

router.post("/movies", addMovie);
router.post("/movies/:id/episodes", addEpisode);
router.get("/movies/:id", getMovie);
router.get("/movies", getAllMovies);
router.get("/movies/:movieId/episodes/:episodeId", getEpisodeById); // New route for getting a single episode

module.exports = router;
