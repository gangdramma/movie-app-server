const express = require("express");
const {
  addMovie,
  getMovie,
  getAllMovies,
} = require("../controllers/movieController");
const router = express.Router();

router.post("/movies", addMovie);
router.get("/movies/:id", getMovie);
router.get("/movies", getAllMovies);

module.exports = router;
