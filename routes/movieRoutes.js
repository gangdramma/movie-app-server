const express = require("express");
const {
  addMovie,
  addEpisode,
  getMovie,
  getAllMovies,
} = require("../controllers/movieController");
const router = express.Router();

router.post("/movies", addMovie);
router.post("/movies/:id/episodes", addEpisode);
router.get("/movies/:id", getMovie);
router.get("/movies", getAllMovies);

module.exports = router;
